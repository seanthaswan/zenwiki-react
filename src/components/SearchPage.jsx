import React, { useState } from 'react';
import './SearchPage.scss';

const logo = require('./128px-Japanese_Crest_mitu_Tomoe_Old_design-edit-earth-wave.png');

export const SearchPage = (props) => {
  const [searchBarValue, setSearchBarValue] = useState();
  const { getResults } = props;


  return (
    <div className="SearchPage soft">
      <img src={logo} alt="Japanese Crest Logo" />
      <h1>
        zen
        <span className="italic thin">wiki</span>
      </h1>
      <form
        className="search-form"
        name="wikipedia-search-form"
        onSubmit={(event) => {
          event.preventDefault();
          getResults(searchBarValue);
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
    </div>
  );
};

export default SearchPage;
