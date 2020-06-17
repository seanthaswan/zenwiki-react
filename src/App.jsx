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
        <SearchPage getResults={getResults} />
        {searchResults && !selectedArticle ? <ResultsList handleResultsClick={() => handleResultsClick()} /> : false}
        { selectedArticle ? <ArticlePage /> : false}
      </div>
      <Footer />
    </div>
  );
}

export default App;
