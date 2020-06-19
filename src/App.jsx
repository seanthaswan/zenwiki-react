import React, { useState } from 'react';
import { Header } from './partials/Header';
import { SearchPage } from './components/SearchPage';
// import { InfoModal } from './components/InfoModal';
import { ResultsList } from './components/ResultsList';
import { ArticlePage } from './components/ArticlePage';
import { Footer } from './partials/Footer';
import './App.scss';


function App() {
  // ----------
  const [searchQuery, setSearchQuery] = useState();
  const [searchResults, setSearchResults] = useState();
  const [selectedArticle, setSelectedArticles] = useState();

  // ----------
  const getResults = (searchBarValue) => {
    console.log(`Getting results for ${searchBarValue}`);

    let url = 'https://en.wikipedia.org/w/api.php';
    const params = {
      action: 'query',
      prop: 'extracts',
      generator: 'prefixsearch',
      formatversion: '2',
      exintro: '1',
      explaintext: '1',
      gpssearch: 'Seattle',
      format: 'json',
    };


    url += '?origin=*';
    Object.keys(params).forEach((key) => { url += `&${key}=${params[key]}`; });

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setSearchResults(response);
      })
      .catch((error) => { console.log(error); });
  };

  // ----------
  const handleResultsClick = (event) => {
    console.log('You clicked a result', event);
  };

  // ----------
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        {searchResults && !selectedArticle ? <ResultsList handleResultsClick={() => handleResultsClick()} /> : <SearchPage getResults={getResults} />}
        { selectedArticle ? <ArticlePage /> : false}
      </div>
      <Footer />
    </div>
  );
}

export default App;
