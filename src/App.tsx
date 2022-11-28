import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  return (

    < div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontFamily: "Flare", letterSpacing: '5px' }}>
          GIOVANNI <span style={{ color: "#0FF3EBE3" }}>C</span>AMPAGNOLO WEBSITE
        </p>
        <a style={{ fontFamily: "Flare", letterSpacing: '5px' }}>
          Enter</a>,
      </header>
    </div >

  );
}

export default App;