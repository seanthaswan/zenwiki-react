import React from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import './App.scss';

const wikimedia = require('./wikimedia-logo.png');
const globe = require('./wikipedia-globe.png');

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <h1>
          zen
          <span className="italic thin">wiki</span>
        </h1>
        <form className="search-form" name="wikipedia-search-form">
          <input className="search-input soft" type="text" />
          <button className="soft" type="submit">🔎</button>
        </form>
        <div className="powered-by-wrapper soft">
          <h2>Powered by</h2>
          <div className="logo-row">
            <img
              className="wiki-globe-logo"
              src={globe}
              alt="Wikipedia Globe Logo"
            />
            <img
              className="wikimedia-logo"
              src={wikimedia}
              alt="Wikimedia Foundation Logo"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
