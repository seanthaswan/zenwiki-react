import React from 'react';
import PropTypes from 'prop-types';
import './ResultItem.scss';

export const ResultItem = (props) => {
  const { result, handleClick } = props;
  const {
    title, extract, description,
  } = result;

  return (
    <div className="soft result-item-wrapper button" role="button" tabIndex={0} onKeyDown={(e) => handleClick(e)} onClick={(e) => handleClick(e)}>
      <h2 className="result-title">{title}</h2>
      {description ? <p className="result-description">{description}</p> : <p className="result-extract">{extract}</p>}
    </div>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object,
  handleClick: PropTypes.func,
};

export default ResultItem;
