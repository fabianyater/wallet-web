import { useQuery } from '@tanstack/react-query';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { getAccounts } from '../services/endpoints/accounts';

export const AccountsContext = createContext();

export const AccountsProvider = ({ children, auth }) => {
  const [selectedAccount, setSelectedAccount] = useState()
  const { data, isPending, isError } = useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(auth.userId, auth.token),
  });

  const accounts = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    if (!selectedAccount && accounts.length > 0) {
      setSelectedAccount(accounts[0].accountId);
    }
  }, [accounts, selectedAccount]);

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
