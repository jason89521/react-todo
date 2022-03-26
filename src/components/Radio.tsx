import React from 'react';

type Props = {
  name: string;
  value: string;
  checked: boolean;
  onRadioChange: React.FormEventHandler<HTMLInputElement>;
} & React.HTMLProps<HTMLLabelElement>;

const Radio = ({ name, value, checked, onRadioChange, children, ...labelProps }: Props) => {
  return (
    <label {...labelProps}>
      {children}
      <input type="radio" className="hidden" name={name} value={value} checked={checked} onChange={onRadioChange} />
    </label>
  );
};

export default Radio;
