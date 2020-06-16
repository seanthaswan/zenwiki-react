import React from 'react';

const logo = require('./128px-Japanese_Crest_mitu_Tomoe_Old_design-edit-earth-wave.png');

export const SearchPage = () => (
  <div className="SearchPage soft">
    <img src={logo} alt="Japanese Crest Logo" />
    <h1>
      zen
      <span className="italic thin">wiki</span>
    </h1>
    <form className="search-form" name="wikipedia-search-form">
      <input className="search-input soft dot-focus" type="text" />
      <button className="soft dot-focus" type="submit">🔎</button>
    </form>
  </div>
);

export default SearchPage;
