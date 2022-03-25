import iconCross from '../images/icon-cross.svg';
import iconCheck from '../images/icon-check.svg';

type Props = {
  data: Todo;
};

const ListItem = ({ data }: Props) => {
  const check_border_bg = data.isCompleted
    ? 'bg-gradient-to-br from-cyan-400 to-fuchsia-500 border-0'
    : 'border border-gray-300';
  const title_text = data.isCompleted ? 'line-through text-gray-300' : 'text-slate-600';

  return (
    <li className="flex items-center gap-4 border-b border-b-gray-300 bg-white px-4 py-3">
      <button className={`${check_border_bg} flex h-5 w-5 items-center justify-center rounded-full`}>
        {data.isCompleted && <img src={iconCheck} alt="check" />}
      </button>

      <span className={`${title_text} mt-1 flex-1 overflow-hidden overflow-ellipsis whitespace-pre text-sm`}>
        {data.title}
      </span>

      <button className="h-3 w-3">
        <img src={iconCross} alt="delete task" />
      </button>
    </li>
  );
};

export default ListItem;
