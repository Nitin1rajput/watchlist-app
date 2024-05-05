import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { SearchProvider } from './context/SearchContext';
import { WatchListProvider } from './context/WatchListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
      <WatchListProvider>
        <App />
      </WatchListProvider>
    </SearchProvider>
  </AuthProvider>
);
