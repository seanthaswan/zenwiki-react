import React from 'react';
import PropTypes from 'prop-types';
import { ResultItem } from './ResultItem';

import './ResultList.scss';

export const ResultsList = (props) => {
  const { searchResults, searchQuery, handleResultsClick } = props;

  const resultItemClickHandler = (e, index) => {
    const itemData = searchResults[index];
    console.log('you clicked on a results item from the repeater', searchResults[index], itemData);
    handleResultsClick(itemData);
  };

  return (
    <div className="results-list-container">
      <h1 className="search-query-display">
        Showing
        {' '}
        {searchResults.length}
        {' '}
        results for:
        “
        {searchQuery}
        ”
      </h1>
      <div className="results-items-container">
        {searchResults.map((resultItemData, i) => (
          <ResultItem
            result={resultItemData}
            key={i}
            handleClick={(e) => resultItemClickHandler(e, i)}
          />
        ))}
      </div>
    </div>
  );
};

ResultsList.propTypes = {
  searchResults: PropTypes.array,
  searchQuery: PropTypes.string,
  handleResultsClick: PropTypes.func,
};


export default ResultsList;
