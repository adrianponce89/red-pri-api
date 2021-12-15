import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LoadableButton } from '../../Loadable';
import ImageSelection from '../../ImageSelection';
import Router from 'next/router';

const SlideRow = ({
  key,
  slide,
  onSelectSlide,
  checked,
  updateTable,
}) => {
  const [title, setTitle] = useState(slide.title);
  const [content, setContent] = useState(slide.content);
  const [href, setHref] = useState(slide.href);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setLoading(true);

    const params = file
      ? { title, content, href }
      : {
          title,
          content,
          href,
          fileURL,
        };

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
      updateTable();
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

  const selectedImage = fileURL || slide.picUrl;
  return (
    <tr key={key}>
      <td style={{ textAlign: 'center' }}>
        <input
          loading={loading}
          type="checkbox"
          checked={checked}
          onChange={onSelectSlide}
        />
      </td>
      <td>{slide._id}</td>
      <td>
        {!selectedImage || isImageURL(selectedImage) ? (
          <ImageSelection
            src={selectedImage}
            onChange={(event) => {
              setFile(event.target.files[0]);
              setFileURL(URL.createObjectURL(event.target.files[0]));
              setModified(true);
            }}
          />
        ) : (
          ''
        )}
        {!file ? (
          <input
            disabled={loading}
            value={fileURL || slide.picUrl}
            onChange={(e) => {
              setFileURL(e.target.value);
              setModified(true);
            }}
          />
        ) : (
          ''
        )}
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
        <input
          disabled={loading}
          value={href}
          onChange={(e) => {
            setHref(e.target.value);
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

export default SlideRow;
