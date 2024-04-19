import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Control from './Control';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
