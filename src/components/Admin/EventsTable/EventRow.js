import React, { useState } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { LoadableButton } from '../../Loadable';
import Link from 'next/link';

const EventRow = ({
  key,
  event,
  onSelectEvent,
  checked,
  updateTable,
}) => {
  const [title, setTitle] = useState(event.title);
  const [content, setContent] = useState(event.content);
  const [published, setPublished] = useState(event.published);
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const params = { title, published };

    const fd = new FormData();
    fd.append('data', JSON.stringify(params));
    const res = await fetch(`/api/events/${event._id}`, {
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

  const handleDelete = async (e) => {
    e.preventDefault();
    const msg = `¿Seguro que querés borrar el evento titulado "${event.title}"?`;
    if (!confirm(msg)) {
      return;
    }
    setLoading(true);

    const res = await fetch(`/api/events/${event._id}`, {
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

  const handleCancel = (e) => {
    e.preventDefault();
    setTitle(event.title);
    setContent(event.content);
    setPublished(event.published);
    setModified(false);
  };

  return (
    <tr key={key}>
      <td style={{ textAlign: 'center' }}>
        <input
          loading={loading}
          type="checkbox"
          checked={checked}
          onChange={onSelectEvent}
        />
      </td>
      <td>{event._id}</td>
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
            <Link href={`/editar-evento/${event.uid}`}>
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

export default EventRow;
