import React from 'react';
import { RadioContext } from '../contexts';

type Props = RadioContextType & {
  children: React.ReactNode;
};

const RadioGroup = ({ name, checkedValue, children, onChange }: Props) => {
  return <RadioContext.Provider value={{ name, checkedValue, onChange }}>{children}</RadioContext.Provider>;
};

export default RadioGroup;
