import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdwondOpen] = useState(false)
  const [isDropdownAvatarOpen, setIsDropdwondAvatarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdwondOpen(!isDropdownOpen);
  };

  const toggleDropdownAvatar = () => {
    setIsDropdwondAvatarOpen(!isDropdownAvatarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, isDropdownOpen, toggleDropdown, isDropdownAvatarOpen, toggleDropdownAvatar }}>
      {children}
    </SidebarContext.Provider>
  );
};
