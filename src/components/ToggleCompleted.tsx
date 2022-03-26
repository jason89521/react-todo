import React from 'react';

import iconCheck from '../images/icon-check.svg';

type Props = {
  isCompleted: boolean;
  onClick: React.FormEventHandler<HTMLInputElement>;
};

const ToggleCompleted = ({ isCompleted, onClick }: Props) => {
  const classVariant = isCompleted
    ? 'bg-gradient-to-br from-cyan-400 to-fuchsia-500 border-0'
    : 'border border-gray-300';

  return (
    <label className={`${classVariant} flex h-5 w-5 cursor-pointer items-center justify-center rounded-full`}>
      {isCompleted && <img src={iconCheck} alt="check" />}
      <input type="checkbox" checked={isCompleted} className="hidden" onChange={onClick} />
    </label>
  );
};

export default ToggleCompleted;
