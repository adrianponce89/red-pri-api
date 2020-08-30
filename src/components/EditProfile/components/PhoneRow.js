import React, { useState } from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import RoundButton from './RoundButton';

const PhoneRowContainer = styled.div`
  border-bottom: 1px solid gray;
  padding-top: 1em;
`;

const FormRow = styled(Form.Row)`
  padding-top: 1em;
  position: relative;
`;

const PhoneRow = (props) => {
  const { phone } = props;

  const onChange = (key, value) => {
    props.onChange({
      ...props.phone,
      [key]: value,
    });
  };

  return (
    <PhoneRowContainer>
      <FormRow>
        <RoundButton
          variant="outline-danger"
          onClick={props.onRemove}
        >
          -
        </RoundButton>
        <Form.Group md="4" as={Col} controlId="whatsapp">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Consultorio"
            value={phone.phoneType}
            onChange={(event) => {
              onChange('phoneType', event.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group md="4" as={Col} controlId="telefono1">
          <Form.Label>Número</Form.Label>
          <Form.Control
            type="tel"
            placeholder="11-4444-5555"
            pattern="[-0-9]+"
            value={phone.number}
            onChange={(event) => {
              onChange('number', event.target.value);
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingrese un teléfono valido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" as={Col} controlId="telefono2">
          <Form.Label>Horario de atención</Form.Label>
          <Form.Control
            type="text"
            placeholder="10hs a 13hs y 16hs a 18hs"
            value={phone.attentionHours}
            onChange={(event) => {
              onChange('attentionHours', event.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Ingrese un teléfono valido.
          </Form.Control.Feedback>
        </Form.Group>
      </FormRow>
    </PhoneRowContainer>
  );
};

export default PhoneRow;
