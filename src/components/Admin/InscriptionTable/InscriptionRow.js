import React, { useState } from 'react';
import { LoadableButton } from '../../Loadable';
import Router from 'next/router';

const InscriptionRow = ({
  key,
  inscription,
  onSelectInscription,
  checked,
  updateTable,
}) => {
  const { name, email, event } = inscription;
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
      updateTable();
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
  };

  return (
    <tr key={key}>
      <td style={{ textAlign: 'center' }}>
        <input
          loading={loading}
          type="checkbox"
          checked={checked}
          onChange={onSelectInscription}
        />
      </td>
      <td>{inscription._id}</td>
      <td>{name}</td>
      <td>
        <a href={'mailto:' + email}>{email}</a>
      </td>
      <td>
        <a href={'/eventos/' + event.uid}>{event.title}</a>
      </td>
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

export default InscriptionRow;
