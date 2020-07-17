import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { server } from '../config';
import Container from '../components/Container';
import UsersTable from '../components/Admin/UsersTable';

const Admin = ({ users, articles }) => {
  const [selected, setSelected] = useState('users');
  return (
    <Container>
      <Nav
        defaultActiveKey={selected}
        variant="pills"
        className="p-2"
      >
        <Nav.Link
          eventKey="users"
          onClick={() => setSelected('users')}
        >
          Usuarios
        </Nav.Link>
        <Nav.Link
          eventKey="articles"
          onClick={() => setSelected('articles')}
        >
          Articulos
        </Nav.Link>
      </Nav>

      <Card>
        <UsersTable users={users} />
      </Card>
    </Container>
  );
};

export async function getStaticProps() {
  const resArticles = await fetch(`${server}/api/articles`);
  const resUsers = await fetch(`${server}/api/users`);
  const articles = await resArticles.json();
  const users = await resUsers.json();
  return {
    props: {
      articles,
      users,
    },
  };
}

export default Admin;
