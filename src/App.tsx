import React, { useState } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import ToggleCompleted from './components/ToggleCompleted';
import RadioGroup from './components/RadioGroup';
import Radio from './components/Radio';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputChecked, setInputChecked] = useState(false);
  const [inputFilter, setInputFilter] = useState('all');

  const completedTodos = todos.filter(todo => todo.isCompleted);
  const activeTodos = todos.filter(todo => !todo.isCompleted);
  const displayTodos = inputFilter === 'all' ? todos : inputFilter === 'active' ? activeTodos : completedTodos;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const newTodo: Todo = { id: uniqid(), title: inputTitle, isCompleted: inputChecked };
    setTodos([...todos, newTodo]);
  };

  const handleClickToggle: (id: string) => React.FormEventHandler<HTMLInputElement> = id => {
    return e => {
      const checked = e.currentTarget.checked;
      const nextTodos = todos.map(todo => {
        if (todo.id === id) return { ...todo, isCompleted: checked };

        return todo;
      });
      setTodos(nextTodos);
    };
  };

  const handleClickDelete: (id: string) => React.MouseEventHandler<HTMLButtonElement> = id => {
    return () => {
      const nextTodos = todos.filter(todo => todo.id !== id);
      setTodos(nextTodos);
    };
  };

  const handleInputFilter: React.FormEventHandler<HTMLInputElement> = event =>
    setInputFilter(event.currentTarget.value);

  const clearComplete = () => setTodos(activeTodos);

  return (
    <div className="min-h-screen bg-gray-100 bg-mobile-light bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-mobile-dark sm:bg-desktop-light dark:sm:bg-desktop-dark">
      <div className="py-12 px-6 md:mx-auto md:w-[40rem] md:px-0 md:pt-16 lg:pt-20">
        <Header />

        <form
          className="mt-6 mb-4 flex items-center rounded-md bg-white px-4 py-3 dark:bg-dark-blue lg:mt-12 lg:mb-6 lg:px-6 lg:py-4"
          onSubmit={handleSubmit}
        >
          <ToggleCompleted isCompleted={inputChecked} onClick={e => setInputChecked(e.currentTarget.checked)} />
          <input
            className="mt-1 ml-4 flex-1 text-sm outline-none dark:bg-dark-blue dark:text-gray-300 md:text-base"
            placeholder="Create a new todos..."
            required
            pattern="[^\s]+(\s+[^\s]+)*"
            value={inputTitle}
            onChange={e => setInputTitle(e.currentTarget.value)}
          />
        </form>

        <ul className="rounded-md bg-white shadow-xl dark:bg-dark-blue">
          {displayTodos.map(todo => {
            return (
              <ListItem
                key={todo.id}
                data={todo}
                onClickToggle={handleClickToggle(todo.id)}
                onClickDelete={handleClickDelete(todo.id)}
              />
            );
          })}

          <li className="relative flex items-center justify-between px-4 py-3 text-xs text-slate-400 sm:text-sm">
            <span>
              {activeTodos.length} item{activeTodos.length > 1 && 's'} left
            </span>

            <div className="absolute left-0 top-14 flex w-full justify-center gap-4 rounded-md bg-white py-3 font-semibold capitalize dark:bg-dark-blue sm:static sm:w-auto sm:p-0">
              <RadioGroup name="filter" checkedValue={inputFilter} onChange={handleInputFilter}>
                <Radio
                  className={`${inputFilter === 'all' ? 'text-sky-600 dark:text-blue-500' : ''} hover:text-white`}
                  radioValue="all"
                >
                  all
                </Radio>
                <Radio
                  className={`${inputFilter === 'active' ? 'text-sky-600 dark:text-blue-500' : ''} hover:text-white`}
                  radioValue="active"
                >
                  active
                </Radio>
                <Radio
                  className={`${inputFilter === 'completed' ? 'text-sky-600 dark:text-blue-500' : ''} hover:text-white`}
                  radioValue="completed"
                >
                  completed
                </Radio>
              </RadioGroup>
            </div>

            <button className="hover:text-white" onClick={clearComplete}>
              Clear Completed
            </button>
          </li>
        </ul>

        <footer className="mt-20 text-center text-slate-400 sm:mt-10">Drag and drop to reorder list</footer>
      </div>
    </div>
  );
}

export default App;
