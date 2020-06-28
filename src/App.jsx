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
  const [selectedArticle, setSelectedArticles] = useState();
  const [theme, themeToggler] = useDarkMode();


  const handleThemeChange = () => {
    themeToggler();
  };
  console.log(theme);
  const themeMode = theme === 'light' ? '' : 'dark-mode';

  // ----------
  const getResults = (searchBarValue) => {
    console.log(`Getting results for ${searchBarValue}`);
    setSearchQuery(searchBarValue);
    let url = 'https://en.wikipedia.org/w/api.php';
    const params = {
      action: 'query',
      prop: 'extracts|info|description|pageimages|imageinfo',
      generator: 'prefixsearch',
      formatversion: '2',
      // exintro: '1',
      // explaintext: '1',
      // exsectionformat: 'wiki',
      inprop: 'url|displaytitle',
      iiprop: 'url|metadata|canonicaltitle|commonmetadata',
      gpssearch: searchBarValue,
      format: 'json',
    };

    url += '?origin=*';
    Object.keys(params).forEach((key) => { url += `&${key}=${params[key]}`; });

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.query);
        console.log(response.query.pages);
        setSearchResults(response.query.pages);
      })
      .catch((error) => { console.log(error); });
  };

  // ----------
  const handleResultsClick = (event) => {
    console.log('You clicked a result', event);
  };

  // ----------
  return (
    <div className={`App ${themeMode}`}>
      <Header setSearchResults={setSearchResults} searchResultsPresent={!!searchResults} toggleTheme={handleThemeChange} theme={theme} />
      <div className="content-wrapper">
        {searchResults && !selectedArticle ? <ResultsList searchQuery={searchQuery} searchResults={searchResults} handleResultsClick={() => handleResultsClick()} /> : <SearchPage getResults={getResults} />}
        { selectedArticle ? <ArticlePage /> : false}
      </div>
      <Footer />
    </div>
  );
}

export default App;
