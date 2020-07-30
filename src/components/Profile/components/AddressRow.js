import React, { useState, useEffect } from 'react';
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
  const [street, setStreet] = useState('');
  const [floor, setFloor] = useState('');
  const [reference, setReference] = useState('');
  const [province, setProvince] = useState('');
  const [locality, setLocality] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && props.address) {
      setStreet(props.address.street);
      setFloor(props.address.floor);
      setReference(props.address.reference);
      setProvince(props.address.province);
      setLocality(props.address.locality);
      setZipCode(props.address.zipCode);
      setLoaded(true);
    }
  }, [props]);

  const onChange = () => {
    props.onChange({
      street,
      floor,
      reference,
      province,
      locality,
      zipCode,
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
            value={street}
            onChange={(event) => {
              setStreet(event.target.value);
              onChange();
            }}
            placeholder="Calle 1234"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="departamento">
          <Form.Label>Departamento</Form.Label>
          <Form.Control
            type="text"
            value={floor}
            onChange={(event) => {
              setFloor(event.target.value);
              onChange();
            }}
            placeholder="8vo C"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="referencias">
          <Form.Label>Referencias</Form.Label>
          <Form.Control
            type="text"
            value={reference}
            onChange={(event) => {
              setReference(event.target.value);
              onChange();
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
            value={locality}
            onChange={(event) => {
              setLocality(event.target.value);
              onChange();
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
            value={province}
            onChange={(event) => {
              setProvince(event.target.value);
              onChange();
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
            value={zipCode}
            onChange={(event) => {
              setZipCode(event.target.value);
              onChange();
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
