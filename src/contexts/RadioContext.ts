import React from 'react';

const defaultContext: RadioContextType = {
  name: 'radio',
  checkedValue: 'checked value',
  onChange: () => {
    return;
  },
};

const RadioContext = React.createContext<RadioContextType>(defaultContext);

export default RadioContext;
