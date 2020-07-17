import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { LoadableButton } from '../Loadable';
import Router from 'next/router';

const UserRow = ({ user }) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(user.role);
  const [loading, setLoading] = useState(false);
  const [modified, setModified] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setLoading(true);

    const params = { email, role };
    if (password.length > 0) params['password'] = password;

    const res = await fetch(`/api/users/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
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
    setModified(false);
    setPassword('');
  };

  return (
    <tr>
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
          <option value="">None</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
        </select>
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
        <LoadableButton
          loading={loading}
          variant="secondary"
          onClick={handleCancel}
          style={{ visibility: modified ? 'visible' : 'hidden' }}
        >
          Cancelar
        </LoadableButton>
      </td>
    </tr>
  );
};

const UsersTable = ({ users }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Mail</th>
        <th>Password</th>
        <th>Rol</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <UserRow user={user} />
      ))}
    </tbody>
  </Table>
);

export default UsersTable;
