// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QueryProvider from './QueryProvider';

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
