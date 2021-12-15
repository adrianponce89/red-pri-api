import React, { useState, useEffect } from 'react';
import Roster from '../../Roster';
import ArticleRow from './ArticleRow';
import styled from 'styled-components';
import { LoadableButton } from '../../Loadable';

const FloatingButton = styled(LoadableButton)`
  right: 0;
  top: -4em;
  padding: 1em;
`;

const ArticlesTable = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = async () => {
    const resArticles = await fetch(`/api/admin/articles`);
    setArticles(await resArticles.json());
  };

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

  const handleAllSelectedDelete = (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar ${selectedArticles.length} usuarios ?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    selectedArticles.forEach(async (_id) => {
      const res = await fetch(`/api/articles/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        console.log('finish');
        updateTable();
        setSelectedArticles([]);
        setLoading(false);
      } else {
        const resJson = await res.json();
        alert(resJson.error);
      }
    });
  };

  return (
    <>
      <FloatingButton
        style={{
          position: 'absolute',
          right: '10vw',
          fontWeight: 'bold',
          display: `${
            selectedArticles.length > 0 ? 'inline-block' : 'none'
          }`,
        }}
        variant="success"
        loading={loading}
        onClick={handleAllSelectedDelete}
      >{`Borrar ${selectedArticles.length}`}</FloatingButton>
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
        checked={selectedArticles.length > 0}
      >
        {articles.map((article) => (
          <ArticleRow
            key={article._id}
            article={article}
            onSelectArticle={() => addSelectedArticle(article)}
            checked={selectedArticles.indexOf(article._id) >= 0}
            updateTable={() => updateTable()}
          />
        ))}
      </Roster>
    </>
  );
};

export default ArticlesTable;
