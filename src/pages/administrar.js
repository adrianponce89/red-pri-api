import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

import { server } from '../config';
import Container from '../components/Container';
import UsersTable from '../components/Admin/UsersTable';
import ArticlesTable from '../components/Admin/ArticlesTable';
import SlidesTable from '../components/Admin/SlidesTable';

const Admin = ({ users, articles, slides }) => {
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
        <Nav.Link
          eventKey="slides"
          onClick={() => setSelected('slides')}
        >
          Portada
        </Nav.Link>
      </Nav>

      <Card>
        {selected === 'users' ? (
          <UsersTable users={users} />
        ) : selected === 'articles' ? (
          <ArticlesTable articles={articles} />
        ) : (
          <SlidesTable slides={slides} />
        )}
      </Card>
    </Container>
  );
};

export async function getServerSideProps({ params, query }) {
  const resArticles = await fetch(`${server}/api/articles`);
  const articles = await resArticles.json();
  const resUsers = await fetch(`${server}/api/users`);
  const users = await resUsers.json();
  const resSlides = await fetch(`${server}/api/slides`);
  const slides = await resSlides.json();
  console.log('params', params);
  console.log('query', query);
  return {
    props: {
      articles,
      users,
      slides,
    },
  };
}

export default Admin;
