import React from 'react';

export const Header = () => (
  <header>
    <div className="header-controls-wrapper">
      <div tabIndex="0" className="dot-focus soft button display-controls-button" />
      <div tabIndex="0" className="dot-focus  soft button info-modal-button" />
    </div>
  </header>
);

export default Header;
