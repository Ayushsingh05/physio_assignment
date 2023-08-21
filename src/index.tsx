import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './context/AppContext';
import { ChakraProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <AppContext />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
