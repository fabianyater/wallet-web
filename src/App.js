import { ConfigProvider } from 'antd';
import { Suspense, lazy, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import AuthContext from './context/AuthProvider';
import { ThemeContext } from './context/ThemeProvider';
import Spinner from './ui/components/Spinner';
import { antdTheme } from './utilities/antDesignConfig';

const PrivateLayout = lazy(() => import('./ui/layouts/PrivateLayout'));
const PublicLayout = lazy(() => import('./ui/layouts/PublicLayout'));

function App() {
  const { theme } = useContext(ThemeContext);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ConfigProvider theme={antdTheme}>
      <div data-theme={theme}>
        <Suspense fallback={<Spinner />}>
          {auth.token ? (
            <PrivateLayout>
              <Outlet />
            </PrivateLayout>
          ) : (
            <PublicLayout>
              <Outlet />
            </PublicLayout>
          )}
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
