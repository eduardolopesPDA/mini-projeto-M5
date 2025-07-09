import React from 'react';
import PilotosList from './components/PilotosList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>F1 2025 - Pilotos</h1>
      </header>
      <main>
        <PilotosList />
      </main>
    </div>
  );
}

export default App;
