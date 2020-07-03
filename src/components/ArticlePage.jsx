import React from 'react';
import PropTypes from 'prop-types';

import './ArticlePage.scss';

export const ArticlePage = ({
  articleData,
}) => {
  console.log(articleData);
  return (
    <div className="ArticlePage">
      <h1>{}</h1>
      <p>extract</p>
    </div>

  );
};


ArticlePage.propTypes = {
  articleData: PropTypes.shape({
    canonicalurl: PropTypes.string,
    contentmodel: PropTypes.string,
    description: PropTypes.string,
    descriptionsource: PropTypes.string,
    displaytitle: PropTypes.string,
    editurl: PropTypes.string,
    extract: PropTypes.string,
    fullurl: PropTypes.string,
    index: PropTypes.number,
    lastrevid: PropTypes.number,
    length: PropTypes.number,
    ns: PropTypes.number,
    pageid: PropTypes.number,
    pageimage: PropTypes.string,
    pagelanguage: PropTypes.string,
    pagelanguagedir: PropTypes.string,
    pagelanguagehtmlcode: PropTypes.string,
    terms: PropTypes.shape({
      alias: PropTypes.array,
      description: PropTypes.array,
      label: PropTypes.array,
    }),
    alias: PropTypes.string,
    label: PropTypes.string,
    thumbnail: PropTypes.shape({
      height: PropTypes.number,
      source: PropTypes.string,
      width: PropTypes.number,
    }),
    title: PropTypes.string,
    touched: PropTypes.string,
  }),
};
export default ArticlePage;
