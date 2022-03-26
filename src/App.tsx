import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import ToggleCompleted from './components/ToggleCompleted';

const defaultTodos: Todo[] = [
  {
    id: 1,
    isCompleted: true,
    title: 'Create a new todos...',
  },
  {
    id: 2,
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    id: 3,
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    id: 4,
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    id: 5,
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    id: 6,
    isCompleted: false,
    title: 'Create a new todos asd fasfg sdgdf gdfgerh dfghdfgadad asd',
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const [inputChecked, setInputChecked] = useState(false);

  const uncompletedTodos = todos.filter(todo => !todo.isCompleted);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    console.log('submit');
  };

  const handleClickToggle: (id: number) => React.FormEventHandler<HTMLInputElement> = id => {
    return e => {
      const checked = e.currentTarget.checked;
      const newTodos = todos.map(todo => {
        if (todo.id === id) return { ...todo, isCompleted: checked };

        return todo;
      });
      setTodos(newTodos);
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 bg-mobile-light bg-contain bg-no-repeat py-12 px-6">
      <Header />

      <form className="mt-6 mb-4 flex items-center rounded-lg bg-white px-4 py-3" onSubmit={handleSubmit}>
        {/* <button className="h-5 w-5 rounded-full border border-gray-300"></button> */}
        <ToggleCompleted isCompleted={inputChecked} onClick={e => setInputChecked(e.currentTarget.checked)} />
        <input className="mt-1 ml-4 flex-1 text-sm outline-none" placeholder="Create a new todos..." />
      </form>

      <ul className="overflow-hidden rounded-lg bg-white shadow-xl">
        {todos.map(todo => {
          return <ListItem key={todo.id} data={todo} onClickToggle={handleClickToggle(todo.id)} />;
        })}

        <li className="flex justify-between px-4 py-3 text-xs text-slate-400">
          <span>
            {uncompletedTodos.length} item{uncompletedTodos.length > 1 && 's'} left
          </span>
          <button>Clear Completed</button>
        </li>
      </ul>

      <div className="mt-4 flex justify-center gap-4 rounded-lg bg-white py-3 text-slate-500">
        <button className="font-semibold text-blue-500">All</button>
        <button className="font-semibold">Active</button>
        <button className="font-semibold">Completed</button>
      </div>

      <footer className="mt-10 text-center text-slate-400">Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
