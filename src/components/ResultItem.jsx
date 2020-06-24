import React from 'react';
import PropTypes from 'prop-types';
import './ResultItem.scss';

export const ResultItem = (props) => {
  const { result } = props;
  const { pageid, title, extract } = result;
  return (
    <div className="soft result-item-wrapper">
      <div className="text-fader" />
      <h2 className="result-title">{title}</h2>
      <p className="result-extract">{extract}</p>
    </div>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object,
};

export default ResultItem;
