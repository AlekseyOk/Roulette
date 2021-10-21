import React from 'react';
import './App.scss';
import BettingGrid from './components/bettingGrid/bettingGrid'

function App() {
  return (
    <div className="App">
      <div className="bettingGrid">
        <BettingGrid />
      </div>
    </div>
  );
}

export default App