// src/contexts/AppContext.js
import React, { createContext, useState, useContext } from 'react';

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  // State for tracking user preferences/settings
  const [theme, setTheme] = useState('light');
  
  // Functions to update state
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Context value
  const contextValue = {
    theme,
    toggleTheme
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;