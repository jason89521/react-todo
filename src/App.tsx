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
    <div className="min-h-screen bg-gray-100 bg-mobile-light bg-contain bg-no-repeat py-12 px-6">
      <Header />

      <form className="mt-6 mb-4 flex items-center rounded-lg bg-white px-4 py-3" onSubmit={handleSubmit}>
        <ToggleCompleted isCompleted={inputChecked} onClick={e => setInputChecked(e.currentTarget.checked)} />
        <input
          className="mt-1 ml-4 flex-1 text-sm outline-none"
          placeholder="Create a new todos..."
          required
          pattern="[^\s]+(\s+[^\s]+)*"
          value={inputTitle}
          onChange={e => setInputTitle(e.currentTarget.value)}
        />
      </form>

      <ul className="overflow-hidden rounded-lg bg-white shadow-xl">
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

        <li className="flex justify-between px-4 py-3 text-xs text-slate-400">
          <span>
            {activeTodos.length} item{activeTodos.length > 1 && 's'} left
          </span>
          <button onClick={clearComplete}>Clear Completed</button>
        </li>
      </ul>

      <div className="mt-4 flex justify-center gap-4 rounded-lg bg-white py-3 font-semibold capitalize text-slate-500">
        <RadioGroup name="filter" checkedValue={inputFilter} onChange={handleInputFilter}>
          <Radio className={`${inputFilter === 'all' ? 'text-sky-600' : ''}`} radioValue="all">
            all
          </Radio>
          <Radio className={`${inputFilter === 'active' ? 'text-sky-600' : ''}`} radioValue="active">
            active
          </Radio>
          <Radio className={`${inputFilter === 'completed' ? 'text-sky-600' : ''}`} radioValue="completed">
            completed
          </Radio>
        </RadioGroup>
      </div>

      <footer className="mt-10 text-center text-slate-400">Drag and drop to reorder list</footer>
    </div>
  );
}

export default App;
