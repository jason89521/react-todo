import React from 'react';
import iconCross from '../images/icon-cross.svg';
import ToggleCompleted from './ToggleCompleted';

type Props = {
  data: Todo;
  onClickToggle: React.FormEventHandler;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
  onDragStart: React.DragEventHandler<HTMLLIElement>;
  onDragEnter: React.DragEventHandler<HTMLLIElement>;
  onDragEnd: React.DragEventHandler<HTMLLIElement>;
};

const ListItem = ({ data, onClickToggle, onClickDelete, onDragStart, onDragEnter, onDragEnd }: Props) => {
  const spanClassVariant = data.isCompleted
    ? 'line-through text-gray-300 dark:text-gray-500'
    : 'dark:text-gray-100 text-slate-600';

  return (
    <li
      className="group flex items-center gap-4 border-b border-b-gray-300 px-4 py-3 dark:border-b-gray-500 lg:px-6 lg:py-4"
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={e => e.preventDefault()}
    >
      <ToggleCompleted isCompleted={data.isCompleted} onClick={onClickToggle} />

      <span
        className={`${spanClassVariant} mt-1 flex-1 overflow-hidden overflow-ellipsis whitespace-pre text-sm transition-all duration-300 md:text-base lg:font-medium`}
      >
        {data.title}
      </span>

      <button className="h-3 w-3 lg:h-4 lg:w-4" onClick={onClickDelete}>
        <img className="group-hover:block xl:hidden" src={iconCross} alt="delete task" />
      </button>
    </li>
  );
};

export default ListItem;
