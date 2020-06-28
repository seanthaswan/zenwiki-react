import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InfoModal } from '../components/InfoModal';
import { useDarkMode } from '../components/useDarkMode';

import './Header.scss';

export const Header = (props) => {
  Header.defaultProps = {
    backButtonShown: false,
  };

  const { searchResultsPresent, setSearchResults } = props;
  const [displayDropDownShown, setDisplayDropDownShown] = useState(false);
  const [infoModalShown, setInfoModalShown] = useState(false);
  // const [theme, themeToggler] = useDarkMode();
  // console.log(theme);
  // const themeMode = theme === 'light' ? '' : 'dark-mode';

  return (
    <header>
      <div className="header-controls-wrapper">
        { searchResultsPresent ? <button type="button" aria-label="Back Button" className="dot-focus soft back-button-wrapper" onClick={() => setSearchResults(() => undefined)}><div className="back-button" /></button> : false }

        { searchResultsPresent ? <button type="button" aria-label="Zenwiki logo" className="dot-focus soft logo-wrapper" onClick={() => setSearchResults(() => undefined)}><div className="logo" /></button> : false }

        <button type="button" aria-label="App Info" className="dot-focus soft" onClick={() => setInfoModalShown(!infoModalShown)}><div className="info-modal-button" /></button>
        { infoModalShown ? (
          <InfoModal closeWindow={() => setInfoModalShown(false)} />
        ) : ''}

        <button type="button" aria-label="Display Settings" className="dot-focus soft" onClick={() => setDisplayDropDownShown(!displayDropDownShown)}><div className="display-controls-button" /></button>
        { displayDropDownShown ? (
          <div className="display-controls-drop-menu">
            <button type="button" aria-label="Dark Mode Toggler" className="soft " onClick={() => props.toggleTheme()}>
              <div className="display-controls-theme" />
            </button>
          </div>
        ) : ''}

      </div>
    </header>
  );
};

Header.propTypes = {
  searchResultsPresent: PropTypes.bool,
};


export default Header;
