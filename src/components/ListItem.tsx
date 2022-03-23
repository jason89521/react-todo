import iconCross from '../images/icon-cross.svg';

type Props = {
  data: { title: string; isCompleted: boolean };
};

const ListItem = ({ data }: Props) => {
  return (
    <li className="flex items-center gap-4 border-b border-b-gray-300 bg-white px-4 py-3">
      <button className="h-5 w-5 rounded-full border border-gray-300"></button>
      <span className="mt-1 flex-1 text-sm text-slate-600">{data.title}</span>
      <button className="h-3 w-3">
        <img src={iconCross} alt="delete task" />
      </button>
    </li>
  );
};

export default ListItem;
