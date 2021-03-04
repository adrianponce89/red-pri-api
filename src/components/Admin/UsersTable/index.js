import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LoadableButton } from '../../Loadable';
import Roster from '../../Roster';
import UserRow from './UserRow';

const FloatingButton = styled(LoadableButton)`
  right: 0;
  top: -4em;
  padding: 1em;
`;

const UsersTable = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    upDateTable();
  }, []);

  const upDateTable = async () => {
    const resUsers = await fetch(`/api/admin/users`);
    setUsers(await resUsers.json());
  };

  const addSelectedUser = (user) => {
    const index = selectedUsers.indexOf(user._id);

    if (index < 0) {
      setSelectedUsers([...selectedUsers, user._id]);
    } else {
      setSelectedUsers(
        selectedUsers
          .slice(0, index)
          .concat(selectedUsers.slice(index + 1)),
      );
    }
  };

  const addAllSeletedUsers = (event) => {
    if (event.target.checked) {
      setSelectedUsers(users.map(({ _id }) => _id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleAllSelectedDelete = (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar ${selectedUsers.length} usuarios ?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    selectedUsers.forEach(async (_id) => {
      const res = await fetch(`/api/users/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        console.log('finish');
        upDateTable();
        setLoading(false);
        setSelectedUsers([]);
      } else {
        const resJson = await res.json();
        alert(resJson.error);
      }
    });
  };

  return (
    <>
      <FloatingButton
        style={{
          position: 'absolute',
          right: '10vw',
          fontWeight: 'bold',
          display: `${
            selectedUsers.length > 0 ? 'inline-block' : 'none'
          }`,
        }}
        variant="success"
        loading={loading}
        onClick={handleAllSelectedDelete}
      >{`Borrar ${selectedUsers.length}`}</FloatingButton>
      <FloatingButton
        href="/crear-perfil"
        variant="success"
        style={{ position: 'absolute' }}
      >
        Crear Nuevo Perfil
      </FloatingButton>
      <Roster
        titlesHead={[
          'Selección',
          '#',
          'Mail',
          'Password',
          'Rol',
          'Permisos',
          'Acciones',
        ]}
        onSeletedAll={addAllSeletedUsers}
        checked={selectedUsers.length > 0}
      >
        {users.map((user) => (
          <UserRow
            key={user._id}
            user={user}
            onSelectUser={() => addSelectedUser(user)}
            checked={selectedUsers.indexOf(user._id) >= 0}
            upDateTable={() => upDateTable()}
          />
        ))}
      </Roster>
    </>
  );
};

export default UsersTable;
