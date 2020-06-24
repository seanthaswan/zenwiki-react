import React from 'react';
import PropTypes from 'prop-types';
import { ResultItem } from './ResultItem';

export const ResultsList = (props) => {
  const { searchResults } = props;

  return (
    <div>
      {searchResults.map((resultItemData, i) => <ResultItem result={resultItemData} key={i} />)}
    </div>
  );
};

ResultsList.propTypes = {
  searchResults: PropTypes.array,
};


export default ResultsList;
