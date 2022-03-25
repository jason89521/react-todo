import React, { useCallback, useEffect, useState } from 'react';

export type FormData = Record<string, FormDataEntryValue>;
export type Error<T> = Partial<Record<keyof T, string>>;
export type Validate<T> = (data: T) => Error<T>;

export type OnValidationPass<T> = (data: T, event: React.FormEvent<HTMLFormElement>) => void;
export type OnValidationFail<T> = (error: Error<T>, event: React.FormEvent<HTMLFormElement>) => void;
export type OnFormSubmit<T> = (
  onSucess: OnValidationPass<T>,
  onFailure?: OnValidationFail<T>
) => React.FormEventHandler<HTMLFormElement>;

const useForm = <T extends FormData>(validate: Validate<T>, defaultData: T) => {
  const [data, setData] = useState<T>(defaultData);
  const [error, setError] = useState<Error<T>>({});
  const formState = { data, error };

  const onFormSubmit: OnFormSubmit<T> = (onSuccess, onFailure) => {
    return event => {
      event.preventDefault();

      if (validate !== undefined) {
        const validationResult = validate(data);
        setError(validationResult);
        onFailure && onFailure(validationResult, event);
        if (Object.keys(validationResult).length !== 0) return;
      }

      onSuccess(data, event);
    };
  };

  const register = useCallback((name: keyof T) => {
    const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
      setData(prev => ({ ...prev, [name]: event.currentTarget.value }));
    };

    return {
      name: name,
      value: data[name] || '',
      onChange: onChange,
    };
  }, []);

  return { onFormSubmit, register, formState };
};

export default useForm;
