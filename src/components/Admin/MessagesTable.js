import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck';
import styled from 'styled-components';
import { LoadableButton } from '../Loadable';
import Router from 'next/router';
import Link from 'next/link';

const MessageRow = ({ key, message }) => {
  const { name, email, content } = message;
  const [loading, setLoading] = useState(false);

  const handleDelete = async (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar el mensaje de ${message.email}?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    const res = await fetch(`/api/messages/${message._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      console.log('finish');
      Router.reload();
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
  };

  return (
    <tr key={key}>
      <td>{message._id}</td>
      <td>{name}</td>
      <td>
        <a href={'mailto:' + email}>{email}</a>
      </td>
      <td>{content}</td>
      <td>
        <LoadableButton
          disabled={loading}
          loading={loading}
          variant="danger"
          onClick={handleDelete}
        >
          Eliminar
        </LoadableButton>
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

const MessagesTable = ({ messages }) => {
  return (
    <Table striped bordered hover>
      <FloatingButton
        href="/crear-perfil"
        variant="success"
        style={{ position: 'absolute' }}
      >
        Crear Nuevo Perfil
      </FloatingButton>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Mail</th>
          <th>Contenido</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message) => (
          <MessageRow key={message._id} message={message} />
        ))}
      </tbody>
    </Table>
  );
};

export default MessagesTable;
