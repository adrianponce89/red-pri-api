import React, { useState } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { LoadableButton } from '../../Loadable';
import Link from 'next/link';

const ArticleRow = ({
  key,
  article,
  onSelectArticle,
  checked,
  updateTable,
}) => {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [published, setPublished] = useState(article.published);
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setLoading(true);

    const params = { title, published };

    const fd = new FormData();
    fd.append('data', JSON.stringify(params));
    const res = await fetch(`/api/articles/${article._id}`, {
      method: 'PATCH',
      body: fd,
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
      updateTable();
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
    setPublished(article.published);
    setModified(false);
  };

  return (
    <tr key={key}>
      <td style={{ textAlign: 'center' }}>
        <input
          loading={loading}
          type="checkbox"
          checked={checked}
          onChange={onSelectArticle}
        />
      </td>
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
        <FormCheck
          loading={loading}
          type="checkbox"
          label="Publicado"
          checked={published}
          onChange={(e) => {
            setPublished(e.target.checked);
            setModified(true);
          }}
        />
      </td>
      <td>
        {modified ? (
          <>
            <LoadableButton
              loading={loading}
              variant="success"
              onClick={handleSave}
            >
              Guardar
            </LoadableButton>
            <Button
              loading={loading}
              variant="secondary"
              onClick={handleCancel}
              style={{ visibility: modified ? 'visible' : 'hidden' }}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <LoadableButton
              loading={loading}
              variant="danger"
              onClick={handleDelete}
            >
              Eliminar
            </LoadableButton>
            <Link href={`/editar-articulo/${article.uid}`}>
              <Button disabled={loading} variant="primary">
                Editar
              </Button>
            </Link>
          </>
        )}
      </td>
    </tr>
  );
};

export default ArticleRow;
