import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { LoadableButton } from '../Loadable';
import Router from 'next/router';

const InscriptionRow = ({ key, inscription }) => {
  const { name, email, eventId } = inscription;
  const [loading, setLoading] = useState(false);

  const handleDelete = async (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar la inscripción de ${inscription.email}?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    const res = await fetch(`/api/inscriptions/${inscription._id}`, {
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
      <td>{inscription._id}</td>
      <td>{name}</td>
      <td>
        <a href={'mailto:' + email}>{email}</a>
      </td>
      <td>{eventId}</td>
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

const InscriptionTable = ({ inscriptions }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Mail</th>
          <th># Evento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {inscriptions.map((inscription) => (
          <InscriptionRow
            key={inscription._id}
            inscription={inscription}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default InscriptionTable;
