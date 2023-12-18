import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './context/ThemeProvider';
import PrivateLayout from './ui/layouts/PrivateLayout';
import PublicLayout from './ui/layouts/PublicLayout';
import AuthContext from './context/AuthProvider';

function App() {
  const { theme } = useContext(ThemeContext);
  const { auth } = useContext(AuthContext);
  const Layout = auth.token ? PrivateLayout : PublicLayout

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
