import React from 'react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

type Props = {
  checkedValue: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
};

const FilterRow = ({ checkedValue, onChange }: Props) => {
  return (
    <RadioGroup name="filter" checkedValue={checkedValue} onChange={onChange}>
      <Radio
        className={`${
          checkedValue === 'all' ? 'text-sky-600 dark:text-blue-500' : ''
        } hover:text-black dark:hover:text-white`}
        radioValue="all"
      >
        all
      </Radio>
      <Radio
        className={`${
          checkedValue === 'active' ? 'text-sky-600 dark:text-blue-500' : ''
        } hover:text-black dark:hover:text-white`}
        radioValue="active"
      >
        active
      </Radio>
      <Radio
        className={`${
          checkedValue === 'completed' ? 'text-sky-600 dark:text-blue-500' : ''
        } hover:text-black dark:hover:text-white`}
        radioValue="completed"
      >
        completed
      </Radio>
    </RadioGroup>
  );
};

export default FilterRow;
