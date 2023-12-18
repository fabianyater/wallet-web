import { useContext, useEffect } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeProvider';
import PublicLayout from './ui/layouts/PublicLayout';
import { Outlet } from 'react-router-dom';

function App() {
  const { theme } = useContext(ThemeContext)
  const token = localStorage.getItem("token");
  const Layout = token ? null : PublicLayout

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
