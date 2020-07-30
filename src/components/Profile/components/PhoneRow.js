import React, { useState, useEffect } from 'react';
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
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [attentionHours, setAttentionHours] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && props.phone) {
      setType(props.phone.type);
      setNumber(props.phone.number);
      attentionHours(props.phone.attentionHours);
      setLoaded(true);
    }
  }, [props]);

  const onChange = () => {
    props.onChange({
      type,
      number,
      attentionHours,
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
            value={type}
            onChange={(event) => {
              setType(event.target.value);
              onChange();
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
            value={number}
            onChange={(event) => {
              setNumber(event.target.value);
              onChange();
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
            value={attentionHours}
            onChange={(event) => {
              setAttentionHours(event.target.value);
              onChange();
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
