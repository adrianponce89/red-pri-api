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

const SearchByLocation = () => {
  const [specility, setSpecility] = useState([]);
  const [social, setSocial] = useState([]);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const slug =
      '/busqueda/especialidades-' +
      specility.join().toLowerCase().replace(/ /g, '-') +
      '/obrasocial-' +
      social.join().toLowerCase().replace(/ /g, '-') +
      '/direccion-' +
      address.toLowerCase();
    Router.push(slug);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} sm={4} controlId="especialidad">
          <Form.Label>Especialidad</Form.Label>
          <Typeahead
            onChange={setSpecility}
            options={specialities}
            placeholder="Especialidad..."
            selected={specility}
          />
        </Form.Group>

        <Form.Group as={Col} sm={4} controlId="social">
          <Form.Label>Obra Social</Form.Label>
          <Typeahead
            onChange={setSocial}
            options={obrasSociales}
            placeholder="Obra Social..."
            selected={social}
          />
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
          loading={loading}
          disabled={specility.length === 0 || loading}
        >
          Buscar
        </Button>
      </Col>
    </Form>
  );
};

export default SearchByLocation;
