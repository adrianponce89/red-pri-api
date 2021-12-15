import React, { useState, useEffect } from 'react';
import Roster from '../../Roster';
import UserRow from './UserRow';
import MessageNotFound from '../../MessageNotFound';
import UsersTableKeypad from './UsersTableKeypad';
import UsersTableFilters from '../../TableFilters';

const UsersTable = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('Nombre');

  const TITLES_TABLE_USER = [
    'Selección',
    '#',
    'Mail',
    'Password',
    'Rol',
    'Permisos',
    'Acciones',
  ];

  useEffect(() => {
    updateTable();
  }, []);

  const handleFilterUsers = (textSearch) => {
    if (textSearch.length === 0) {
      updateTable();
      setFilter('');
    } else {
      setFilter(textSearch);
      switch (search) {
        case '#':
          setUsers(
            users.filter((user) => user._id.includes(textSearch)),
          );
          break;
        case 'Mail':
          setUsers(
            users.filter((user) =>
              user.email
                .toLowerCase()
                .includes(textSearch.toLowerCase()),
            ),
          );
          break;
        default:
          setUsers(
            users.filter((user) =>
              user.name
                .toLowerCase()
                .includes(textSearch.toLowerCase()),
            ),
          );
          break;
      }
    }
  };
  const updateTable = async () => {
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

  const handleSelectTitle = (title) => {
    setSearch(title);
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
        updateTable();
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
      <UsersTableKeypad
        handleAllSelectedDelete={handleAllSelectedDelete}
        display={selectedUsers.length > 0}
        deletes={selectedUsers.length}
        loading={loading}
      />
      <UsersTableFilters
        handleSelectTitle={handleSelectTitle}
        handleFilter={handleFilterUsers}
        first={'Nombre'}
        filter={filter}
        search={search}
        titleTables={TITLES_TABLE_USER}
      />
      <Roster
        titlesHead={TITLES_TABLE_USER}
        onSeletedAll={addAllSeletedUsers}
        checked={selectedUsers.length > 0}
      >
        {users.map((user) => (
          <UserRow
            key={user._id}
            user={user}
            onSelectUser={() => addSelectedUser(user)}
            checked={selectedUsers.indexOf(user._id) >= 0}
            updateTable={() => updateTable()}
          />
        ))}
      </Roster>
      {<MessageNotFound empty={users.length > 0} />}
    </>
  );
};

export default UsersTable;
