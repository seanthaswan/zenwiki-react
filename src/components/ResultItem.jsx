import React from 'react';
import PropTypes from 'prop-types';
import './ResultItem.scss';

export const ResultItem = (props) => {
  const { result, handleClick } = props;
  const {
    pageid, title, extract, description, thumbnail,
  } = result;

  const getLargerThumbnailSource = (smallThumbnailSource) => {
    const expandedSourceUrl = smallThumbnailSource.split('/');
    const sizePrefix = '200px';
    const fileName = expandedSourceUrl[expandedSourceUrl.length - 1];
    const strippedFileName = fileName.replace('50px', '');
    expandedSourceUrl[expandedSourceUrl.length - 1] = sizePrefix + strippedFileName;
    return expandedSourceUrl.join('/');
  };

  return (
    <div className="soft result-item-wrapper button" onClick={(e) => handleClick(e)}>
      <div className="text-fader" />
      <h2 className="result-title">{title}</h2>
      {description ? <p className="result-description">{description}</p> : <p className="result-extract">{extract}</p>}
    </div>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object,
};

export default ResultItem;
