import React, { useState } from 'react';
import { Button, FormCheck } from 'react-bootstrap';
import { LoadableButton } from '../../Loadable';
import Link from 'next/link';

const UserRow = ({
  key,
  user,
  checked,
  onSelectUser,
  updateTable,
}) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(user.role);
  const [writes, setWrite] = useState(
    user.permits && user.permits.writes,
  );
  const [index, setIndex] = useState(
    user.permits && user.permits.index,
  );
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setLoading(true);

    const params = { email, role, permits: { writes, index } };
    if (password.length > 0) params['password'] = password;

    const fd = new FormData();
    fd.append('data', JSON.stringify(params));
    const res = await fetch(`/api/users/${user._id}`, {
      method: 'PATCH',
      body: fd,
    });

    if (res.status === 200) {
      console.log('finish');
      updateTable();
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
    setLoading(false);
    setModified(false);
    setPassword('');
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar el usuario ${user.email}?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    const res = await fetch(`/api/users/${user._id}`, {
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
    setModified(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setEmail(user.email);
    setRole(user.role);
    setWrite(user.permits && user.permits.writes);
    setIndex(user.permits && user.permits.index);
    setModified(false);
    setPassword('');
  };

  return (
    <tr key={key}>
      <td style={{ textAlign: 'center' }}>
        <input
          loading={loading}
          type="checkbox"
          checked={checked}
          onChange={onSelectUser}
        />
      </td>
      <td>{user._id}</td>
      <td>
        <input
          disabled={loading}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setModified(true);
          }}
        />
      </td>
      <td>
        <input
          disabled={loading}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setModified(true);
          }}
          placeholder="########"
        />
      </td>
      <td>
        <select
          disabled={loading}
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setModified(true);
          }}
          class="form-control"
          id="role"
        >
          <option value="">-</option>
          <option value="admin">Admin</option>
        </select>
      </td>
      <td>
        <FormCheck
          loading={loading}
          type="checkbox"
          label="Escritura"
          checked={writes}
          onChange={(e) => {
            setWrite(e.target.checked);
            setModified(true);
          }}
        />
        <FormCheck
          loading={loading}
          type="checkbox"
          label="Visible"
          checked={index}
          onChange={(e) => {
            setIndex(e.target.checked);
            setModified(true);
          }}
        />
      </td>
      <td>
        {modified ? (
          <>
            <LoadableButton
              disabled={loading}
              loading={loading}
              variant="success"
              onClick={handleSave}
            >
              Guardar
            </LoadableButton>
            <Button
              disabled={loading}
              variant="secondary"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <LoadableButton
              disabled={loading}
              loading={loading}
              variant="danger"
              onClick={handleDelete}
            >
              Eliminar
            </LoadableButton>
            <Link href={`/editar-perfil/${user.username}`}>
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

export default UserRow;
