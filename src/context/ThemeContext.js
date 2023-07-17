import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  const theme = {
  //  backgroundColor: colorMode === 'dark' ? 'brown' : 'green', // dark blue-gray or white color
    buttonBgColor: colorMode === 'dark' ? '#2c2c2da8' : '#FFFFFF', // transparent dark blue or white color 
    buttonHoverColor: colorMode === 'dark' ? '#2c2c2d' : '#000000', // dark gray or black color
    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};