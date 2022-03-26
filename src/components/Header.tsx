import React from 'react';
import iconMoon from '../images/icon-moon.svg';

const Header = () => {
  return (
    <header className="flex items-baseline justify-between">
      <h1 className="text-3xl font-bold uppercase tracking-[10px] text-white">Todo</h1>
      <button>
        <img src={iconMoon} alt="change to moon theme" />
      </button>
    </header>
  );
};

export default Header;
