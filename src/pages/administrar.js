import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

import Container from '../components/Container';
import UsersTable from '../components/Admin/UsersTable';
import ArticlesTable from '../components/Admin/ArticlesTable';
import EventsTable from '../components/Admin/EventsTable';
import SlidesTable from '../components/Admin/SlidesTable';
import MessagesTable from '../components/Admin/MessagesTable';
import InscriptionTable from '../components/Admin/InscriptionTable';

const Admin = () => {
  const [selected, setSelected] = useState('users');
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [slides, setSlides] = useState([]);
  const [messages, setMessages] = useState([]);
  const [insciptions, setInscriptions] = useState([]);

  useEffect(async () => {
    const resUsers = await fetch(`/api/admin/users`);
    setUsers(await resUsers.json());
    const resArticles = await fetch(`/api/admin/articles`);
    setArticles(await resArticles.json());
    const resEvents = await fetch(`/api/admin/events`);
    setEvents(await resEvents.json());
    const resSlides = await fetch(`/api/slides`);
    setSlides(await resSlides.json());
    const resMessages = await fetch(`/api/messages`);
    setMessages(await resMessages.json());
    const resInscriptions = await fetch(`/api/inscriptions`);
    setInscriptions(await resInscriptions.json());
  }, []);

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
          eventKey="insciptions"
          onClick={() => setSelected('insciptions')}
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
          <UsersTable users={users} />
        ) : selected === 'articles' ? (
          <ArticlesTable articles={articles} />
        ) : selected === 'events' ? (
          <EventsTable events={events} />
        ) : selected === 'slides' ? (
          <SlidesTable slides={slides} />
        ) : selected === 'messages' ? (
          <MessagesTable messages={messages} />
        ) : (
          <InscriptionTable inscriptions={insciptions} />
        )}
      </Card>
    </Container>
  );
};

export default Admin;
