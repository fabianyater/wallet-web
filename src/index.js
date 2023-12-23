import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeProvider';
import './index.css';
import PrivateRoute from './ui/pages/components/PrivateRoute';
import AccountsPage from './ui/pages/private/AccountsPage';
import CreateNewAccount from './ui/pages/private/AccountsPage/CreateNewAccount';
import ListAccounts from './ui/pages/private/AccountsPage/ListAccounts';
import CreateFirstAccountPage from './ui/pages/private/CreateFirstAccountPage';
import WalletsPage from './ui/pages/private/WalletsPage/';
import CreateNewWallet from './ui/pages/private/WalletsPage/CreateNewWallet';
import EditWallet from './ui/pages/private/WalletsPage/EditWallet';
import ListWallets from './ui/pages/private/WalletsPage/ListWallets/';
import TestPage from './ui/pages/private/test';
import LoginPage from './ui/pages/public/LoginPage';
import SignUpPage from './ui/pages/public/SignUpPage';


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
                <Route path='wallets' element={<PrivateRoute><WalletsPage /></PrivateRoute>}>
                  <Route index element={<PrivateRoute><ListWallets /></PrivateRoute>} />
                  <Route index path='create' element={<PrivateRoute><CreateNewWallet /></PrivateRoute>} />
                  <Route index path='edit/:id' element={<PrivateRoute><EditWallet /></PrivateRoute>} />
                </Route>
                <Route path='accounts' element={<PrivateRoute><AccountsPage /></PrivateRoute>}>
                  <Route index element={<PrivateRoute><ListAccounts /></PrivateRoute>} />
                  <Route index path='create' element={<PrivateRoute><CreateNewAccount /></PrivateRoute>} />
                </Route>
                <Route path="*" element={<h1>404</h1>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);