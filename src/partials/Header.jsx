import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InfoModal } from '../components/InfoModal';

import './Header.scss';

export const Header = (props) => {
  const { searchResultsPresent, clearState } = props;
  const [displayDropDownShown, setDisplayDropDownShown] = useState(false);
  const [infoModalShown, setInfoModalShown] = useState(false);

  return (
    <header>
      <div className="header-controls-wrapper animate__animated animate__fadeIn animate__faster">
        { searchResultsPresent ? <button type="button" aria-label="Back Button" className="dot-focus soft back-button-wrapper animate__animated animate__fadeIn animate__faster" onClick={clearState}><div className="back-button" /></button> : false }

        { searchResultsPresent ? <button type="button" aria-label="Zenwiki logo" className="dot-focus soft logo-wrapper animate__animated animate__fadeIn animate__faster" onClick={clearState}><div className="logo" /></button> : false }

        <button type="button" aria-label="App Info" className="dot-focus soft" onClick={() => setInfoModalShown(!infoModalShown)}><div className="info-modal-button" /></button>
        { infoModalShown ? (
          <InfoModal closeWindow={() => setInfoModalShown(false)} />
        ) : ''}

        <button type="button" aria-label="Display Settings" className="dot-focus soft" onClick={() => setDisplayDropDownShown(!displayDropDownShown)}><div className="display-controls-button" /></button>
        { displayDropDownShown ? (
          <div className="display-controls-drop-menu animate__animated animate__fadeIn animate__fast">
            <button type="button" aria-label="Dark Mode Toggler" className="soft" onClick={() => props.toggleTheme()}>
              <div className="display-controls-theme" />
            </button>
          </div>
        ) : ''}

      </div>
    </header>
  );
};

Header.propTypes = {
  clearState: PropTypes.func,
  searchResultsPresent: PropTypes.bool,
};


export default Header;
