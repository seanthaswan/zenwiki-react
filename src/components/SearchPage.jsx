import React, { useState } from 'react';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import './SearchPage.scss';

// const logo = require('./128px-Japanese_Crest_mitu_Tomoe_Old_design-edit-earth-wave.png');
const logo = require('./enso-sm-sepia.png');

export const SearchPage = (props) => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const { getResults } = props;

  const getSearchResults = (searchBarValue) => {
    getResults(searchBarValue);
  };

  return (
    <div className="SearchPage soft">
      <img className="home-logo" src={logo} alt="Japanese Crest Logo" />
      <h1>
        zen
        <span className="italic thin">wiki</span>
      </h1>
      <form
        className="search-form"
        name="wikipedia-search-form"
        onSubmit={(event) => {
          event.preventDefault();
          getSearchResults(searchBarValue);
          if (!searchBarValue) {
            store.addNotification({
              title: '',
              message: 'Please enter a search query.',
              type: 'default',
              insert: 'top',
              container: 'top-right',
              animationIn: ['animate__animated', 'animate__fadeIn'],
              animationOut: ['animate__animated', 'animate__fadeOutRight'],
              dismiss: {
                duration: 2000,
              },
            });
          }
        }}
      >
        <input
          className="search-input soft dot-focus"
          type="text"
          onChange={(event) => {
            setSearchBarValue(event.target.value);
          }}
        />
        <input className="soft dot-focus" type="submit" value="🔎" />
      </form>
      <ReactNotification />
    </div>
  );
};

export default SearchPage;
