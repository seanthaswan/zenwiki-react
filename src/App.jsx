import React, { useState } from 'react';
import { Header } from './partials/Header';
import { SearchPage } from './components/SearchPage';
// import { InfoModal } from './components/InfoModal';
import { ResultsList } from './components/ResultsList';
import { ArticlePage } from './components/ArticlePage';
import { Footer } from './partials/Footer';
import { useDarkMode } from './components/useDarkMode';


import './App.scss';


function App() {
  // ----------
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState();
  const [selectedArticle, setSelectedArticle] = useState();
  const [theme, themeToggler] = useDarkMode();


  // ----------
  // Sent to the Header component, where the options menu exists.
  // The button within options menu triggers the toggle function in useDarkMode.
  const handleThemeChange = () => {
    themeToggler();
  };

  // ----------
  // Sent to the SearchResults component, where each result item exists.
  // Clicking on a result item saves the associated data into our state.
  const handleResultsClick = (itemData) => {
    setSelectedArticle(itemData);
  };

  // ----------
  const clearState = () => {
    // If there is a selected article, return to the search results page.
    if (selectedArticle) {
      setSelectedArticle();
    }

    // If the user is viewing search results, send them back to the search page.
    setSearchQuery();
    setSearchResults();
  };

  // Stringifies the theme value returned from the useDarkMode hook.
  const themeMode = theme === 'light' ? '' : 'dark-mode';

  // ----------
  // First, Construct the API endpoint by building a URL with a set of parameters.
  // Then, Use built-in fetch function to send an XMLHttpRequest.
  // Then, Ssave the response into our searchResult state.
  const getResults = (searchBarValue) => {
    setSearchQuery(searchBarValue);

    // Using the documentation and API sandbox, I configured the request for the info
    // that I needed for the project. https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&list=search&srsearch=Craig%20Noone&format=json
    let url = 'https://en.wikipedia.org/w/api.php';

    const params = {
      action: 'query',
      prop: 'extracts|info|description|pageimages|imageinfo|pageterms',
      generator: 'prefixsearch',
      formatversion: '2',
      exintro: '1',
      // explaintext: '1',
      // exsectionformat: 'wiki',
      inprop: 'url|displaytitle',
      iiprop: 'url|metadata|canonicaltitle|commonmetadata',
      gpssearch: searchBarValue,
      list: 'search',
      srsearch: searchBarValue,
      srnamespace: 0,
      srwhat: 'text',
      srinfo: 'suggestion',
      srprop: '',
      sroffset: 0,
      srlimit: 1,
      format: 'json',
    };

    // We need to set the origin to allow for CORS
    url += '?origin=*';
    // Iterate through each of the keys in `params` and concatenate the value of the key,
    // along with the ampersand and equal signs to construct the full URL.
    Object.keys(params).forEach((key) => { url += `&${key}=${params[key]}`; });

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.dir(response.query.pages);
        setSearchResults(response.query.pages);
      })
      .catch((error) => { console.log(error); });
  };

  // ----------
  return (
    <div className={`App ${themeMode}`}>
      <Header
        clearState={() => clearState()}
        searchResultsPresent={!!searchResults}
        toggleTheme={handleThemeChange}
        theme={theme}
      />

      <div className="content-wrapper animate__animated animate__fadeIn">

        {searchResults && !selectedArticle
          ? <ResultsList searchQuery={searchQuery} searchResults={searchResults} handleResultsClick={(itemData) => handleResultsClick(itemData)} />
          : <SearchPage getResults={getResults} />}

        { selectedArticle
          ? <ArticlePage articleData={selectedArticle} />
          : false}
      </div>
      <Footer />
    </div>
  );
}

export default App;
