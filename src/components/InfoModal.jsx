import React from 'react';

const wikimedia = require('./wikimedia-logo.png');
const globe = require('./wikipedia-globe.png');

export const InfoModal = () => (
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
);

export default InfoModal;
