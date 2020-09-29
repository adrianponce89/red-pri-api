import React, { useState } from 'react';
import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import { LoadableButton as Button } from '../Loadable';
import { provincias } from '../../config/data';

const SearchByName = () => {
  const [query, setQuery] = useState('');
  const [provincia, setProvincia] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const slug =
      '/busqueda/texto-' +
      query.toLowerCase().replace(/ /g, '-') +
      (provincia.length > 0
        ? '/provincia-' +
          provincia.join().toLowerCase().replace(/ /g, '-')
        : '');
    Router.push(slug);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} sm={8} controlId="profesionales">
          <Form.Label>Buscar</Form.Label>
          <Form.Control
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Por ejemplo: pediatría Catamarca"
          />
          <Form.Text className="text-muted">
            Podés buscar por nombre, especialidad, localidad, barrio,
            teléfono o combinarlos. Ej.: pediatría Catamarca
          </Form.Text>
        </Form.Group>

        <Form.Group as={Col} sm={4} controlId="provincia">
          <Form.Label>Provincia</Form.Label>
          <Typeahead
            onChange={setProvincia}
            options={provincias}
            placeholder="Todas las provincias..."
            selected={provincia}
          />
        </Form.Group>
      </Form.Row>

      <Col xs="auto" className="my-1 d-flex justify-content-end">
        <Button
          variant="primary"
          className="btn-lg"
          type="submit"
          loading={loading}
          disabled={query.length === 0 || loading}
        >
          Buscar
        </Button>
      </Col>
    </Form>
  );
};

export default SearchByName;
