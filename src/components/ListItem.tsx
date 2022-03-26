import React from 'react';
import iconCross from '../images/icon-cross.svg';
import ToggleCompleted from './ToggleCompleted';

type Props = {
  data: Todo;
  onClickToggle: React.FormEventHandler;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
};

const ListItem = ({ data, onClickToggle, onClickDelete }: Props) => {
  const spanClassVariant = data.isCompleted ? 'line-through text-gray-300' : 'text-slate-600';

  return (
    <li className="flex items-center gap-4 border-b border-b-gray-300 bg-white px-4 py-3">
      <ToggleCompleted isCompleted={data.isCompleted} onClick={onClickToggle} />

      <span
        className={`${spanClassVariant} mt-1 flex-1 overflow-hidden overflow-ellipsis whitespace-pre text-sm transition-all duration-300`}
      >
        {data.title}
      </span>

      <button className="h-3 w-3" onClick={onClickDelete}>
        <img src={iconCross} alt="delete task" />
      </button>
    </li>
  );
};

export default ListItem;
