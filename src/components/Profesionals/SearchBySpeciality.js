import React, { useState } from 'react';
import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import { LoadableButton as Button } from '../Loadable';
import { provincias_large, localidades_map } from '../../config/data';

const SearchBySpeciality = ({ titlesList }) => {
  const [title, setTitle] = useState([]);
  const [provincia, setProvincia] = useState([]);
  const [localidad, setLocalidad] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const slug =
      '/busqueda/profesion-' +
      title.join().toLowerCase().replace(/ /g, '-') +
      (provincia.length > 0
        ? '/provincia-' +
          provincia.join().toLowerCase().replace(/ /g, '-')
        : '') +
      (localidad.length > 0
        ? '/localidad-' +
          localidad.join().toLowerCase().replace(/ /g, '-')
        : '');

    Router.push(slug);
  }

  const getLocalidades = () =>
    provincia.length > 0
      ? localidades_map[provincia[0]]
      : Object.values(localidades_map).reduce(
          (a, v) => a.concat(v),
          [],
        );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} sm={4} controlId="especialidad">
          <Form.Label>Profesión(*)</Form.Label>
          <Typeahead
            onChange={setTitle}
            options={titlesList}
            placeholder="Profesión..."
            selected={title}
          />
        </Form.Group>
        <Form.Group as={Col} sm={4} controlId="provincia">
          <Form.Label>Provincia</Form.Label>
          <Typeahead
            onChange={(pr) => {
              setProvincia(pr);
              setLocalidad([]);
            }}
            options={provincias_large}
            placeholder="Todas las provincias..."
            selected={provincia}
          />
        </Form.Group>
        <Form.Group as={Col} sm={4} controlId="localidad">
          <Form.Label>
            {provincia === provincias_large[0]
              ? 'Barrio'
              : 'Localidad'}
          </Form.Label>
          <Typeahead
            onChange={setLocalidad}
            options={getLocalidades()}
            placeholder="Todas las localidades..."
            selected={localidad}
          />
        </Form.Group>
      </Form.Row>

      <Col xs="auto" className="my-1 d-flex justify-content-end">
        <Button
          variant="primary"
          className="btn-lg"
          type="submit"
          loading={loading}
          disabled={title.length === 0 || loading}
        >
          Buscar
        </Button>
      </Col>
    </Form>
  );
};

export default SearchBySpeciality;
