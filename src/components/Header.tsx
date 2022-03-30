import React, { useRef, useEffect, useState } from 'react';
import iconMoon from '../images/icon-moon.svg';
import iconSun from '../images/icon-sun.svg';

const Header = () => {
  const [icon, setIcon] = useState(iconMoon);
  const rootRef = useRef<HTMLElement>();

  useEffect(() => {
    rootRef.current = document.documentElement;
    const theme = localStorage.getItem('theme');
    if (theme === null) return;

    if (theme === 'dark') {
      rootRef.current.classList.add('dark');
      setIcon(iconSun);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', icon === iconMoon ? 'light' : 'dark');
  }, [icon]);

  const handleClickTheme = () => {
    const root = rootRef.current;
    if (root) {
      const isDark = root.classList.contains('dark');
      setIcon(isDark ? iconMoon : iconSun);
      root.classList.toggle('dark');
    }
  };

  return (
    <header className="flex items-baseline justify-between">
      <h1 className="text-3xl font-bold uppercase tracking-[10px] text-white lg:text-4xl">Todo</h1>
      <button onClick={handleClickTheme}>
        <img src={icon} alt="change to moon theme" />
      </button>
    </header>
  );
};

export default Header;
