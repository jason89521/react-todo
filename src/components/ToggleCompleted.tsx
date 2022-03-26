import React from 'react';

import iconCheck from '../images/icon-check.svg';

type Props = {
  isCompleted: boolean;
  onClick: React.MouseEventHandler;
};

const ToggleCompleted = ({ isCompleted, onClick }: Props) => {
  const classVariant = isCompleted
    ? 'bg-gradient-to-br from-cyan-400 to-fuchsia-500 border-0'
    : 'border border-gray-300';

  return (
    <button className={`${classVariant} flex h-5 w-5 items-center justify-center rounded-full`} onClick={onClick}>
      {isCompleted && <img src={iconCheck} alt="check" />}
    </button>
  );
};

export default ToggleCompleted;
