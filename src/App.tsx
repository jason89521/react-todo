import Header from './components/Header';
import Form from './components/Form';
import ListItem from './components/ListItem';

const Todos = [
  {
    isCompleted: false,
    title: 'Create a new todos...',
  },
  {
    isCompleted: false,
    title: 'Create a new todos...',
  },
  {
    isCompleted: false,
    title: 'Create a new todos...',
  },
  {
    isCompleted: false,
    title: 'Create a new todos...',
  },
  {
    isCompleted: false,
    title: 'Create a new todos...',
  },
  {
    isCompleted: false,
    title: 'Create a new todos...',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 bg-mobile-light bg-contain bg-no-repeat py-12 px-6">
      <Header />

      <div className="mt-6 mb-4">
        <Form />
      </div>

      <ul className="overflow-hidden rounded-lg bg-white shadow-xl">
        {Todos.map((todo, index) => {
          return <ListItem key={index} data={todo} />;
        })}
        <li className="flex justify-between px-4 py-3 text-xs text-slate-400">
          <span>5 items left</span>
          <button>Clear Completed</button>
        </li>
      </ul>

      <div className="mt-4 flex justify-center gap-4 rounded-lg bg-white py-4 text-slate-500">
        <button className="font-semibold text-blue-500">All</button>
        <button className="font-semibold">Active</button>
        <button className="font-semibold">Completed</button>
      </div>

      <footer className="text-slate-400 text-center mt-10">Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
