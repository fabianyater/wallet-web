import { useQuery } from '@tanstack/react-query';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { getAccounts } from '../services/endpoints/accounts';

export const AccountsContext = createContext();

export const AccountsProvider = ({ children, auth }) => {
  const initialSelectedAccount = localStorage.getItem('accountId');
  const [selectedAccount, setSelectedAccount] = useState(initialSelectedAccount)
  const { data, isPending, isError } = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(auth.userId, auth.token),
  });

  const accounts = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    if (!selectedAccount && accounts.length > 0) {
      const defaultAccount = accounts[0].accountId;
      setSelectedAccount(defaultAccount);
    }
  }, [accounts, selectedAccount]);

  useEffect(() => {
    if (selectedAccount) {
      const storedAuth = JSON.parse(localStorage.getItem('auth')) || {}
      storedAuth.accountId = selectedAccount
      localStorage.setItem('auth', JSON.stringify(storedAuth));
    }
  }, [selectedAccount]);

  const hasAccounts = () => {
    return accounts.length > 0;
  };

  const value = {
    accounts,
    selectedAccount,
    updateSelectedAccount: setSelectedAccount,
    isPending,
    isError,
    hasAccounts
  }

  return (
    <AccountsContext.Provider value={value}>
      {children}
    </AccountsContext.Provider>
  );
};
