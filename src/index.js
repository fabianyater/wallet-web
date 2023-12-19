import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeProvider';
import './index.css';
import LoginPage from './ui/pages/public/LoginPage';
import SignUpPage from './ui/pages/public/SignUpPage/SignUpPage';
import PrivateRoute from './ui/pages/components/PrivateRoute/PrivateRoute';
import TestPage from './ui/pages/private/test';
import { AuthProvider } from './context/AuthProvider';
import CreateFirstAccountPage from './ui/pages/private/CreateFirstAccountPage';


const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient} >
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<App />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/overview" element={<PrivateRoute>
                  <TestPage />
                </PrivateRoute>} />
                <Route path="/create-first-account" element={<PrivateRoute>
                  <CreateFirstAccountPage />
                </PrivateRoute>} />
                <Route path="*" element={<h1>404</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);