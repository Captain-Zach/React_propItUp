import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Zach" lastName="Jones" age={29} hairColor="Brown"/>
      <PersonCard firstName="Jim" lastName="Jones" age={29} hairColor="Blonde"/>
      <PersonCard firstName="Zach" lastName="Johnson" age={29} hairColor="Pink"/>
      <PersonCard firstName="Jim" lastName="Johnson" age={29} hairColor="Green"/>
    </div>
  );
}

export default App;
