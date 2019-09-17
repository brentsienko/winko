import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='CenterText' align='left'>
          Collaboration between businesses and influencers with ease.
        </p>
        <p className='SubCenterText' align='left'>
          Join Promo today
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header className="BottomBanner">
        <div class="row">
          <div class="column">poop</div>
          <div class="column">test</div>
          <div class="column">testtttt</div>
        </div>
      </header>
    </div>
  );
}

export default App;
