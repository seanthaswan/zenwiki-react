import React, { useState } from 'react';
import { InfoModal } from '../components/InfoModal';
import './Header.scss';

export const Header = () => {
  const [displayDropDownShown, setDisplayDropDownShown] = useState(false);
  const [infoModalShown, setInfoModalShown] = useState(false);

  return (
    <header>
      <div className="header-controls-wrapper">
        <button type="button" aria-label="App Info" className="dot-focus soft" onClick={() => setInfoModalShown(!infoModalShown)}><div className="info-modal-button" /></button>
        { infoModalShown ? (
          <InfoModal />
        ) : ''}
        <button type="button" aria-label="Display Settings" className="dot-focus soft" onClick={() => setDisplayDropDownShown(!displayDropDownShown)}><div className="display-controls-button" /></button>
        { displayDropDownShown ? (
          <div className="display-controls-drop-menu">
            <button type="button" aria-label="Dark Mode Toggler" className="soft">
              <div className="display-controls-theme" />
            </button>
          </div>
        ) : ''}
      </div>
    </header>
  );
};


export default Header;
