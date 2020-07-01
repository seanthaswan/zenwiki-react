import React from 'react';
import './InfoModal.scss';

const wikimedia = require('./wikimedia-logo.png');
const globe = require('./wikipedia-globe.png');
const react = require('./react-512.png');

export const InfoModal = (props) => {
  const { closeWindow } = props;
  return (
    <div className="powered-by-container" onClick={closeWindow}>
      <div className="powered-by-wrapper soft">
        <h2>
          About zen
          <i>wiki</i>
        </h2>
        <p>
          zen
          <i>wiki</i>
          {' '}
          provides a simple interface for searching Wikipedia articles.
        </p>
        <p>
          Every visible element is essential.
        </p>
        <p>
          I started from the idea of a research interface with an oddly satisfying "eye-feel"- meaning elements that please the eye and inspire exploration. The artistic direction is organic, essential, and minimalist in structure with neumorphism tendencies. This is the first project where I've implemented a "dark" theme, please give it a try!
        </p>
        <h2>Powered by</h2>
        <div className="logo-row">
          <a href="https://www.wikipedia.org/" target="_blank" rel="noreferrer" alt="External Wikipedia Link" className="soft powered-by-item">
            <img
              className="wiki-globe-logo"
              src={globe}
              alt="Wikipedia Globe Logo"
            />
          </a>
          <a href="https://wikimediafoundation.org/" target="_blank" rel="noreferrer" alt="External Wikimedia Foundation Link" className="soft powered-by-item">
            <img
              className="wikimedia-logo"
              src={wikimedia}
              alt="Wikimedia Foundation Logo"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer" alt="External React.js Link" className="soft powered-by-item">
            <img
              className="react-logo"
              src={react}
              alt="React Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default InfoModal;
