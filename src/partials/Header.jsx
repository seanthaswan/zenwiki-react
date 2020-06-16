import React from 'react';

export const Header = () => (
  <header>
    <div className="header-controls-wrapper">
      <button type="button" aria-label="Display Settings" className="dot-focus soft"><div className="display-controls-button" /></button>
      <button type="button" aria-label="App Info" className="dot-focus soft"><div className="info-modal-button" /></button>
    </div>
  </header>
);

export default Header;
