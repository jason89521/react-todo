import React, { useContext } from 'react';
import { RadioContext } from '../contexts';

type Props = {
  radioValue: string;
} & React.ComponentPropsWithoutRef<'label'>;

const Radio = ({ radioValue, children, ...labelProps }: Props) => {
  const { name, checkedValue, onChange } = useContext(RadioContext);
  return (
    <label {...labelProps}>
      {children}
      <input
        type="radio"
        className="hidden"
        name={name}
        value={radioValue}
        checked={checkedValue === radioValue}
        onChange={onChange}
      />
    </label>
  );
};

export default Radio;
