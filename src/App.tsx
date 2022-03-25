import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import useForm from './components/useForm';
import type { Error, Validate, OnValidationPass } from './components/useForm';

const defaultTodos = [
  {
    isCompleted: true,
    title: 'Create a new todos...',
  },
  {
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    isCompleted: false,
    title: 'Create a new todos',
  },
  {
    isCompleted: false,
    title: 'Create a new todos asd fasfg sdgdf gdfgerh dfghdfgadad asd',
  },
];

type Input = {
  title: string;
};

const validate: Validate<Input> = data => {
  const error: Error<Input> = {};
  const regex = /^\S(.*\S)?$/;

  if (!regex.test(data.title)) {
    error.title = 'title should not be empty string, or has whitespace at the both ends.';
  }

  return error;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const { onFormSubmit, register, formState } = useForm<Input>(validate, { title: '' });

  const onPass: OnValidationPass<Input> = data => {
    setTodos([...todos, { title: data.title, isCompleted: false }]);
  };

  const uncompletedTodos = todos.filter(todo => !todo.isCompleted);

  return (
    <div className="min-h-screen bg-gray-100 bg-mobile-light bg-contain bg-no-repeat py-12 px-6">
      <Header />
      {formState.error.title}
      <form className="mt-6 mb-4 flex items-center rounded-lg bg-white px-4 py-3" onSubmit={onFormSubmit(onPass)}>
        <button className="h-5 w-5 rounded-full border border-gray-300"></button>
        <input
          className="mt-1 ml-4 flex-1 text-sm outline-none"
          placeholder="Create a new todos..."
          {...register('title')}
        />
      </form>

      <ul className="overflow-hidden rounded-lg bg-white shadow-xl">
        {todos.map((todo, index) => {
          return <ListItem key={index} data={todo} />;
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
