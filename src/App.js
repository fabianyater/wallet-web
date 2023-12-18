import { useContext, useEffect } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeProvider';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      <button onClick={toggleTheme}>Cambiar tema</button>
      <h1>El tema actual es: {theme}</h1>
    </div>
  );
}

export default App;
