import React from 'react';

export const ArticlePage = (props) => {
  const {
    pageid, title, extract, description, thumbnail,
  } = props.articleData;

  console.log(props);
  return (
    <div>
      <h1>{title}</h1>
      <p>extract</p>
    </div>
  );
};


export default ArticlePage;
