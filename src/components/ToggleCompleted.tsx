import React from 'react';

import iconCheck from '../images/icon-check.svg';

type Props = {
  isCompleted: boolean;
  onClick: React.FormEventHandler<HTMLInputElement>;
};

const ToggleCompleted = ({ isCompleted, onClick }: Props) => {
  const labelClass = isCompleted ? 'bg-gradient-to-br from-cyan-400 to-fuchsia-500' : 'bg-gray-300 dark:bg-gray-500';
  const divClass = isCompleted ? 'bg-transparent' : 'bg-white dark:bg-dark-blue';
  return (
    <label
      className={`${labelClass} h-5 w-5 rounded-full p-px hover:bg-gradient-to-br hover:from-cyan-400 hover:to-fuchsia-500`}
    >
      <div className={`${divClass} flex h-full w-full items-center justify-center rounded-full`}>
        {isCompleted && <img src={iconCheck} alt="check" />}
      </div>
      <input type="checkbox" checked={isCompleted} className="hidden" onChange={onClick} />
    </label>
  );
};

export default ToggleCompleted;
