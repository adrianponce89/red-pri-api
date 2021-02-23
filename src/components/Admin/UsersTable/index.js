import React, { useState } from 'react';
import styled from 'styled-components';
import { LoadableButton } from '../../Loadable';
import Roster from '../../Roster';
import UserRow from './UserRow';

const FloatingButton = styled(LoadableButton)`
  right: 0;
  top: -4em;
  padding: 1em;
`;

const Index = ({ users }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
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
  return (
    <>
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
      >
        {users.map((user) => (
          <UserRow
            key={user._id}
            user={user}
            onSelectUser={() => addSelectedUser(user)}
            checked={() => selectedsUsers.indexOf(user._id) >= 0}
          />
        ))}
      </Roster>
    </>
  );
};

export default Index;
