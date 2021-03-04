import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

import Container from '../components/Container';
import UsersTable from '../components/Admin/UsersTable/index';
import ArticlesTable from '../components/Admin/ArticlesTable/index';
import EventsTable from '../components/Admin/EventsTable/index';
import SlidesTable from '../components/Admin/SlidesTable/index';
import MessagesTable from '../components/Admin/MessagesTable/index';
import InscriptionTable from '../components/Admin/InscriptionTable/index';

const Admin = () => {
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
          eventKey="events"
          onClick={() => setSelected('events')}
        >
          Events
        </Nav.Link>
        <Nav.Link
          eventKey="inscriptions"
          onClick={() => setSelected('inscriptions')}
        >
          Inscripciones
        </Nav.Link>
        <Nav.Link
          eventKey="slides"
          onClick={() => setSelected('slides')}
        >
          Portada
        </Nav.Link>
        <Nav.Link
          eventKey="messages"
          onClick={() => setSelected('messages')}
        >
          Mensajes
        </Nav.Link>
      </Nav>

      <Card>
        {selected === 'users' ? (
          <UsersTable />
        ) : selected === 'articles' ? (
          <ArticlesTable />
        ) : selected === 'events' ? (
          <EventsTable />
        ) : selected === 'slides' ? (
          <SlidesTable />
        ) : selected === 'messages' ? (
          <MessagesTable />
        ) : (
          <InscriptionTable />
        )}
      </Card>
    </Container>
  );
};

export default Admin;
