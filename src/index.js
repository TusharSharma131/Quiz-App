import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { extendTheme, ChakraProvider, ColorModeScript, ColorModeProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;600;700&display=swap');
      body {
        font-family: 'Nunito', sans-serif;
      }
    `}
  />
);

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ColorModeProvider>
        <Router>
          <GlobalStyles />
          <App />
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
);