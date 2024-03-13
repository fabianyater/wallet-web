import React, { createContext, useState } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    setCurrent(page);
  };

  return (
    <PaginationContext.Provider value={{ current, onChange }}>
      {children}
    </PaginationContext.Provider>
  );
};
