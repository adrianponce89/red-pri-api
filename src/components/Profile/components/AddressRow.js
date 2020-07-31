import React, { useState } from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import RoundButton from './RoundButton';

const AddressRowContainer = styled.div`
  border-bottom: 1px solid gray;
  padding-top: 1em;
`;

const FormRow = styled(Form.Row)`
  padding-top: 1em;
  position: relative;
`;

const AddressRow = (props) => {
  const { address } = props;

  const onChange = (key, value) => {
    props.onChange({
      ...props.address,
      [key]: value,
    });
  };

  return (
    <AddressRowContainer>
      <FormRow>
        <RoundButton
          variant="outline-danger"
          onClick={props.onRemove}
        >
          -
        </RoundButton>
        <Form.Group required as={Col} md="4" controlId="direccion">
          <Form.Label>Calle</Form.Label>
          <Form.Control
            type="text"
            value={address.street}
            onChange={(event) => {
              onChange('street', event.target.value);
            }}
            placeholder="Calle 1234"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="departamento">
          <Form.Label>Departamento</Form.Label>
          <Form.Control
            type="text"
            value={address.floor}
            onChange={(event) => {
              onChange('floor', event.target.value);
            }}
            placeholder="8vo C"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="referencias">
          <Form.Label>Referencias</Form.Label>
          <Form.Control
            type="text"
            value={address.reference}
            onChange={(event) => {
              onChange('reference', event.target.value);
            }}
            placeholder="Entre Av.Corrientes y Lavalle"
          />
        </Form.Group>
      </FormRow>
      <Form.Row>
        <Form.Group md="4" as={Col} controlId="localidad">
          <Form.Label>Localidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Localidad"
            value={address.locality}
            onChange={(event) => {
              onChange('locality', event.target.value);
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingrese una localidad valida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" as={Col} controlId="provincia">
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provincia"
            value={address.province}
            onChange={(event) => {
              onChange('province', event.target.value);
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingrese una provincia valida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" as={Col} controlId="codigopostal">
          <Form.Label>Código Postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Código Postal"
            value={address.zipCode}
            onChange={(event) => {
              onChange('zipCode', event.target.value);
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingrese un código postal valido.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
    </AddressRowContainer>
  );
};

export default AddressRow;
