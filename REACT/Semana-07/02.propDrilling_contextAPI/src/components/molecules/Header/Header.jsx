
import { useState } from 'react';
import './Header.css';
import {  useTheme } from "../../../contexts/theme"

export default function Header() {
  // const [theme, setTheme] = useState('light');
  const { theme, setTheme } = useTheme();


  return (
    <header className={`theme-${theme}`}>
      <h1>React</h1>

      <div>
        <button
          onClick={() => setTheme('dark')}
        >Escuro</button>
        <button
          onClick={() => setTheme('light')}
        >Claro</button>
      </div>
    </header>
  );
}
