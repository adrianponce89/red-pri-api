import React, { useState } from 'react';
import Roster from '../../Roster';
import ArticleRow from './ArticleRow';

const ArticlesTable = ({ articles }) => {
  const [selectedArticles, setSelectedArticles] = useState([]);
  const addSelectedArticle = (article) => {
    const index = selectedArticles.indexOf(article._id);
    if (index < 0) {
      setSelectedArticles([...selectedArticles, article._id]);
    } else {
      setSelectedArticles(
        selectedArticles
          .slice(0, index)
          .concat(selectedArticles.slice(index + 1)),
      );
    }
  };

  const addAllSeletedArticles = (event) => {
    if (event.target.checked) {
      setSelectedArticles(articles.map(({ _id }) => _id));
    } else {
      setSelectedArticles([]);
    }
  };

  return (
    <Roster
      titlesHead={[
        'Selección',
        '#',
        'Title',
        'Content',
        'Publish',
        'Acciones',
      ]}
      onSeletedAll={addAllSeletedArticles}
    >
      {articles.map((article) => (
        <ArticleRow
          key={article._id}
          article={article}
          onSelectArticle={() => addSelectedArticle(article)}
          checked={selectedArticles.indexOf(article._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default ArticlesTable;
