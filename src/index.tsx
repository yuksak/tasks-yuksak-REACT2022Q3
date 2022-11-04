import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MainContextProvider from 'store/main-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <MainContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainContextProvider>
);
