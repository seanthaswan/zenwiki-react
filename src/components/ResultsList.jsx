import React from 'react';
import PropTypes from 'prop-types';
import { ResultItem } from './ResultItem';

import './ResultList.scss';

export const ResultsList = (props) => {
  const { searchResults, searchQuery } = props;

  return (
    <div className="result-item-container">
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
      {searchResults.map((resultItemData, i) => <ResultItem result={resultItemData} key={i} />)}
    </div>
  );
};

ResultsList.propTypes = {
  searchResults: PropTypes.array,
  searchQuery: PropTypes.string,
};


export default ResultsList;
