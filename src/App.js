import { useContext, useEffect } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeProvider';
import PublicLayout from './ui/layouts/PublicLayout';
import LoginPage from './ui/pages/public/LoginPage';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      <PublicLayout>
        <LoginPage />
      </PublicLayout>
    </div>
  );
}

export default App;
