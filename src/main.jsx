import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="compat-app">
      <h1>DSant Cotizador</h1>
      <p>Aplicación publicada desde el catálogo DSant Lonking.</p>
      <a href="/">Abrir cotizador</a>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
