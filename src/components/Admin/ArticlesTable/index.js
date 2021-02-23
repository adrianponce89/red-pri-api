import React, { useState } from 'react';
import Roster from '../../Roster';
import ArticleRow from './ArticleRow';

const ArticlesTable = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState([]);
  const addSelectedArticle = (articles) => {
    const index = selectedArticle.indexOf(articles._id);
    if (index < 0) {
      setSelectedArticle([...selectedArticle, articles._id]);
    } else {
      setSelectedArticle(
        selectedArticle
          .slice(0, index)
          .concat(selectedArticle.slice(index + 1)),
      );
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
    >
      {articles.map((article) => (
        <ArticleRow
          key={article._id}
          article={article}
          onSelectArticle={() => addSelectedArticle(article)}
          checked={() => selectedArticle.indexOf(article._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default ArticlesTable;
