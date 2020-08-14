import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormCheck from 'react-bootstrap/FormCheck';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { LoadableButton } from '../Loadable';
import Router from 'next/router';

const UserRow = ({ key, user }) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(user.role);
  const [write, setWrite] = useState(user.permits);
  const [index, setIndex] = useState(user.permits);
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
          <option value="">None</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
        </select>
      </td>
      <td>
        <FormCheck
          loading={loading}
          type="checkbox"
          label="Escritura"
          value={write}
          onChange={(e) => {
            setWrite(e.target.checked);
            setModified(true);
          }}
        />
        <FormCheck
          loading={loading}
          type="checkbox"
          label="Indexada"
          value={index}
          onChange={(e) => {
            setIndex(e.target.checked);
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

const UsersTable = ({ users }) => (
  <Table striped bordered hover>
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
  </Table>
);

export default UsersTable;
