import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ThemeProvider } from './components/ThemeProvider.jsx';

import './styles/reset.css';
import './styles/common.css';
import './styles/Theme.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
