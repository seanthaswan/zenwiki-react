import React from 'react';
import PropTypes from 'prop-types';

export const ResultItem = (props) => {
  const { result } = props;
  const { pageid, title, extract } = result;
  return (
    <div>
      <h1>{title}</h1>
      <p>{extract}</p>
    </div>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object,
};

export default ResultItem;
