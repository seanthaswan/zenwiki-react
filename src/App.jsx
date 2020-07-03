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


  const handleThemeChange = () => {
    themeToggler();
  };

  const clearState = () => {
    if (selectedArticle) {
      setSelectedArticle();
    }

    setSearchQuery();
    setSearchResults();
  };

  const themeMode = theme === 'light' ? '' : 'dark-mode';

  // ----------
  const getResults = (searchBarValue) => {
    console.log(`Getting results for ${searchBarValue}`);
    setSearchQuery(searchBarValue);
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

    url += '?origin=*';
    Object.keys(params).forEach((key) => { url += `&${key}=${params[key]}`; });

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.continue);
        console.log(response.query);
        console.log(response.query.pages);
        setSearchResults(response.query.pages);
      })
      .catch((error) => { console.log(error); });
  };

  // ----------
  const handleResultsClick = (itemData) => {
    console.log('You clicked a result', itemData);
    setSelectedArticle(itemData);
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
