import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck';
import { LoadableButton } from '../Loadable';
import Router from 'next/router';
import Link from 'next/link';

const EventRow = ({ event }) => {
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
    setLoading(true);

    const res = await fetch(`/api/events/${event._id}`, {
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

  const handleCancel = (e) => {
    e.preventDefault();
    setTitle(event.title);
    setContent(event.content);
    setPublished(event.published);
    setModified(false);
  };

  return (
    <tr key={event._id}>
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

const EventsTable = ({ events }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Content</th>
        <th>Publish</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {events.map((event) => (
        <EventRow event={event} />
      ))}
    </tbody>
  </Table>
);

export default EventsTable;
