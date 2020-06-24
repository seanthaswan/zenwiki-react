import React from 'react';
import PropTypes from 'prop-types';
import { ResultItem } from './ResultItem';

export const ResultsList = (props) => {
  const { searchResults, searchQuery } = props;

  return (
    <div>
      <h1>
        Showing results for:
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
