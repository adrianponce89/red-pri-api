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

const SearchByLocation = () => {
  const [specility, setSpecility] = useState('');
  const [social, setSocial] = useState('Particular');
  const [address, setAddress] = useState('');

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} sm={4} controlId="especialidad">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            as="select"
            value={specility}
            onChange={(e) => setSpecility(e.target.value)}
          >
            {specialities.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={4} controlId="social">
          <Form.Label>Obra Social</Form.Label>
          <Form.Control
            as="select"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
          >
            {obrasSociales.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={4} controlId="direccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Por ejemplo: Av. Corrientes 1300, Ciudad Autónoma de Buenos Aires"
          />
          <Form.Text className="text-muted">
            Ingresa una dirección o usa tu ubicación actual. Ej.: Av.
            Corrientes 1300, Ciudad Autónoma de Buenos Aires
          </Form.Text>
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

export default SearchByLocation;
