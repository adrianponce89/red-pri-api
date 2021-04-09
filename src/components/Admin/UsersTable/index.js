import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FormControl,
  Container,
  Row,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { LoadableButton } from '../../Loadable';
import Roster from '../../Roster';
import UserRow from './UserRow';

const FloatingButton = styled(LoadableButton)`
  padding: 1em;
`;

const ConteinerNotFound = styled.div`
  display: ${(prop) => (!prop.empty ? 'flex' : 'none')};
  justify-content: center;
`;

const MessageNotFound = styled.p`
  font-size: 3em;
`;

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
      <Container fluid="sm">
        <Row>
          <Col />
          <Col xs lg="2" style={{ display: 'contents' }}>
            <FloatingButton
              style={{
                fontWeight: 'bold',
                display: `${
                  selectedUsers.length > 0 ? 'inline-block' : 'none'
                }`,
              }}
              variant="success"
              loading={loading}
              onClick={handleAllSelectedDelete}
            >{`Borrar ${selectedUsers.length}`}</FloatingButton>
            <FloatingButton href="/crear-perfil" variant="success">
              Crear Nuevo Perfil
            </FloatingButton>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <InputGroup>
            <DropdownButton
              variant="info"
              title="Filtrado por"
              id="dropdown-basic"
            >
              <Dropdown.Item
                onSelect={(e) => handleSelectTitle('Nombre')}
              >
                Nombre
              </Dropdown.Item>
              {TITLES_TABLE_USER.slice(1, 3).map((title) => (
                <Dropdown.Item
                  eventKey={title}
                  onSelect={(e) => handleSelectTitle(e)}
                >
                  {title}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <FormControl
              type="text"
              onChange={(e) => handleFilterUsers(e.target.value)}
              value={filter}
              placeholder={`${search}`}
            />
          </InputGroup>
        </Row>
      </Container>

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
      {
        <ConteinerNotFound empty={users.length > 0}>
          <MessageNotFound>
            {'No se han encontrado resultados...'}
          </MessageNotFound>
        </ConteinerNotFound>
      }
    </>
  );
};

export default UsersTable;
