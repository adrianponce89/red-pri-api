import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import fetch from 'isomorphic-fetch';
import { useSelector } from 'react-redux';
import { server } from '../../config';
import Container from '../../components/Container';
import EventCard from '../../components/EventCard';
import Popular from '../../components/Popular';
import NavPills from '../../components/NavPills';
import FAIcon from '../../components/FAIcon';

const Eventos = ({ events, popular }) => {
  const profile = useSelector((state) => state.auth.profile);
  const [category, setCategory] = useState('');

  const filteredEvents = category.length
    ? events.filter((event) => event.category === category)
    : events;

  return (
    <Container>
      <Row>
        <Col md="4" className="mb-2">
          <Popular articles={popular} />
        </Col>
        <Col md={{ span: 8, order: 'first' }}>
          <div className="d-flex justify-content-between pb-2">
            <Form.Group inline controlId="inlineFormCategory">
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Categorias...</option>
                <option>PSICOLOGIA</option>
                <option>EDUCACION</option>
                <option>LITERATURA INFANTIL</option>
                <option>HISTORIAS</option>
                <option>SALUD Y NUTRICION</option>
                <option>EMBARAZO Y MATERNIDAD</option>
                <option>OCIO Y RECREACION</option>
              </Form.Control>
            </Form.Group>

            {profile && profile.permits && profile.permits.writes ? (
              <Button
                variant="success"
                href="/crear-evento"
                style={{ paddingTop: '1em' }}
              >
                <FAIcon
                  className="fa fa-pencil-square-o"
                  style={{ verticalAlign: 'middle' }}
                />{' '}
                Crear evento
              </Button>
            ) : (
              ''
            )}
          </div>
          <div>
            {filteredEvents.map((event) => (
              <EventCard key={event._id} {...event} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/events/?sort=date`);
  const events = await res.json();

  const resPopular = await fetch(
    `${server}/api/articles/?sort=seenCounter&limit=5`,
  );
  const popular = await resPopular.json();

  return {
    props: {
      events,
      popular,
    },
  };
}

export default Eventos;
