import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { LoadableButton as Button } from '../Loadable';
import {
  specialities,
  provincias_large,
  localidades_map,
  obrasSociales,
} from '../../config/data';

const SearchBySpecility = () => {
  const [specility, setSpecility] = useState('');
  const [provincia, setProvincia] = useState(
    'Ciudad de Buenos Aires',
  );
  const [localidad, setLocalidad] = useState('Todas las Localidades');

  const [social, setSocial] = useState('Particular');

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="especialidad">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            as="select"
            value={specility}
            onChange={(e) => setSpecility(e.target.value)}
          >
            {specialities.map((name) => (
              <option>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="provincia">
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            as="select"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
          >
            {provincias_large.map((name) => (
              <option>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="localidad">
          <Form.Label>
            {provincia === provincias_large[0]
              ? 'Barrio'
              : 'Localidad'}
          </Form.Label>
          <Form.Control
            as="select"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
          >
            {localidades_map[provincia].map((name) => (
              <option>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="social">
          <Form.Label>Obra Social</Form.Label>
          <Form.Control
            as="select"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
          >
            {obrasSociales.map((name) => (
              <option>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Col xs="auto" className="my-1 d-flex justify-content-end">
        <Button
          variant="primary"
          className="btn-lg"
          type="submit"
          disabled={specility.length === 0}
        >
          Buscar
        </Button>
      </Col>
    </Form>
  );
};

export default SearchBySpecility;
