import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { LoadableButton } from '../Loadable';
import ImageSelection from '../ImageSelection';
import Router from 'next/router';

const SlideRow = ({ slide }) => {
  const [title, setTitle] = useState(slide.title);
  const [content, setContent] = useState(slide.content);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setLoading(true);

    const params = { title, content };

    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(params));
    const res = await fetch(`/api/slides/${slide._id}`, {
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

    const res = await fetch(`/api/slides/${slide._id}`, {
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
    setTitle(slide.title);
    setContent(slide.content);
    setModified(false);
  };

  return (
    <tr key={slide._id}>
      <td>{slide._id}</td>
      <td>
        <ImageSelection
          src={fileURL || slide.picUrl}
          onChange={(event) => {
            setFile(event.target.files[0]);
            setFileURL(URL.createObjectURL(event.target.files[0]));
            setModified(true);
          }}
        />
      </td>
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
        <textarea
          disabled={loading}
          value={content}
          rows="5"
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

const FloatingButton = styled(LoadableButton)`
  position: absolute;
  right: 0;
  top: -4em;
  padding: 1em;
`;

const SlidesTable = ({ slides }) => {
  const [loading, setLoading] = useState(false);
  const handleAdd = async (event) => {
    event.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/slides`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: '',
        content: '',
      }),
    });

    if (res.status === 201) {
      Router.reload();
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
    setLoading(false);
  };

  return (
    <Table striped bordered hover>
      <FloatingButton
        loading={loading}
        onClick={handleAdd}
        variant="success"
        style={{ position: 'absolute' }}
      >
        Agregar diapositiva
      </FloatingButton>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Content</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {slides.map((slide) => (
          <SlideRow slide={slide} />
        ))}
      </tbody>
    </Table>
  );
};

export default SlidesTable;
