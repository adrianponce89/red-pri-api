import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { LoadableButton } from '../Loadable';
import Router from 'next/router';

const ArticleRow = ({ article }) => {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setLoading(true);

    const params = { title };

    const res = await fetch(`/api/articles/${article._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (res.status === 200) {
      console.log('finish');
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
    setLoading(false);
    setModified(false);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/articles/${article._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      Router.reload();
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
    setModified(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setTitle(article.title);
    setContent(article.content);
    setModified(false);
  };

  return (
    <tr key={article._id}>
      <td>{article._id}</td>
      <td>
        <input
          disabled={loading}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setModified(true);
          }}
        />
      </td>
      <td>
        <input
          disabled={true}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setModified(true);
          }}
        />
      </td>
      <td>
        {modified ? (
          <LoadableButton
            loading={loading}
            variant="success"
            onClick={handleSave}
          >
            Guardar
          </LoadableButton>
        ) : (
          <LoadableButton
            loading={loading}
            variant="danger"
            onClick={handleDelete}
          >
            Eliminar
          </LoadableButton>
        )}
        <Button
          loading={loading}
          variant="secondary"
          onClick={handleCancel}
          style={{ visibility: modified ? 'visible' : 'hidden' }}
        >
          Cancelar
        </Button>
      </td>
    </tr>
  );
};

const ArticlesTable = ({ articles }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Content</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {articles.map((article) => (
        <ArticleRow article={article} />
      ))}
    </tbody>
  </Table>
);

export default ArticlesTable;
