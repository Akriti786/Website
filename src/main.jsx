// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>           {/* ✅ Must wrap <App /> */}
    <App />
  </AuthProvider>
);
