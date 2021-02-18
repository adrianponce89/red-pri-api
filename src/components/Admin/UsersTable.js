import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck';
import styled from 'styled-components';
import { LoadableButton } from '../Loadable';
import Router from 'next/router';
import Link from 'next/link';

const UserRow = ({ key, user }) => {
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
      Router.reload();
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

const FloatingButton = styled(LoadableButton)`
  position: absolute;
  right: 0;
  top: -4em;
  padding: 1em;
`;

const TableFixHead = styled.div`
  overflow-y: auto;
  height: 60vh;
`;

const TableSroll = styled(Table)`
  border-collapse: initial;
  width: 100%;
  & thead th {
    position: sticky;
    top: 0;
    border: 2px solid #eee;
    z-index: 1;
    background-color: white;
    align-self: center;
  }
`;

const UsersTable = ({ users }) => {
  return (
    <TableFixHead>
      <TableSroll striped bordered hover>
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
            <th>Mail</th>
            <th>Password</th>
            <th>Rol</th>
            <th>Permisos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </TableSroll>
    </TableFixHead>
  );
};

export default UsersTable;
