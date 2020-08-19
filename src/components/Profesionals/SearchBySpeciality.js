import React, { useState } from 'react';
import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import { LoadableButton as Button } from '../Loadable';
import {
  specialities,
  provincias_large,
  localidades_map,
  obrasSociales,
} from '../../config/data';

const SearchBySpeciality = () => {
  const [specility, setSpecility] = useState([]);
  const [provincia, setProvincia] = useState(
    'Ciudad de Buenos Aires',
  );
  const [localidad, setLocalidad] = useState([]);
  const [social, setSocial] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const slug =
      '/busqueda/especialidades-' +
      specility.join().toLowerCase().replace(/ /g, '-') +
      '/provincia-' +
      provincia.toLowerCase().replace(/ /g, '-') +
      (localidad.length > 0
        ? '/localidad-' +
          localidad.join().toLowerCase().replace(/ /g, '-')
        : '') +
      '/obrasocial-' +
      social.join().toLowerCase().replace(/ /g, '-');
    Router.push(slug);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="especialidad">
          <Form.Label>Especialidad</Form.Label>
          <Typeahead
            onChange={setSpecility}
            options={specialities}
            placeholder="Especialidad..."
            selected={specility}
          />
        </Form.Group>
        <Form.Group as={Col} sm={3} controlId="provincia">
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            as="select"
            value={provincia}
            onChange={(e) => {
              setProvincia(e.target.value);
              setLocalidad([]);
            }}
          >
            {provincias_large.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="localidad">
          <Form.Label>
            {provincia === provincias_large[0]
              ? 'Barrio'
              : 'Localidad'}
          </Form.Label>
          <Typeahead
            onChange={setLocalidad}
            options={localidades_map[provincia]}
            placeholder="Localidad..."
            selected={localidad}
          />
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="social">
          <Form.Label>Obra Social</Form.Label>
          <Typeahead
            onChange={setSocial}
            options={obrasSociales}
            placeholder="Obra Social..."
            selected={social}
          />
        </Form.Group>
      </Form.Row>

      <Col xs="auto" className="my-1 d-flex justify-content-end">
        <Button
          variant="primary"
          className="btn-lg"
          type="submit"
          loading={loading}
          disabled={specility.length === 0 || loading}
        >
          Buscar
        </Button>
      </Col>
    </Form>
  );
};

export default SearchBySpeciality;
