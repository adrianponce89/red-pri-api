import React, { useState } from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import Geocode from 'react-geocode';
import { googleMapsAPIKey } from '../../../config';
import { extractType } from '../../../utils/geocoding';
import RoundButton from './RoundButton';

Geocode.setApiKey(googleMapsAPIKey);
Geocode.setLanguage('es');
Geocode.setRegion('ar');

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

  const onChangeSelection = (selection) => {
    props.onChange({
      ...props.address,
      ...selection,
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (street) => {
    setIsLoading(true);

    Geocode.fromAddress(street).then(
      (response) => {
        const newOptions = response.results.map((i) => ({
          street: i.formatted_address,
          location: i.geometry.location,
          province: extractType(
            'administrative_area_level_1',
            i.address_components,
          ),
          locality:
            extractType('locality', i.address_components) ||
            extractType('sublocality', i.address_components),
          zipCode: extractType('postal_code', i.address_components),
        }));
        if (newOptions.length > 0) {
          setOptions(newOptions);
          onChange('options', newOptions);
        }
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
      },
    );
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
        <Form.Group required as={Col} md="6" controlId="direccion">
          <Form.Label>Dirección</Form.Label>
          <AsyncTypeahead
            id="direccion"
            isLoading={isLoading}
            labelKey="street"
            minLength={5}
            onSearch={handleSearch}
            filterBy={['street']}
            defaultSelected={[
              {
                street: address.street,
                location: address.location,
                province: address.province,
                locality: address.locality,
                zipCode: address.zipCode,
              },
            ]}
            onChange={(selection) => {
              onChangeSelection(selection[0]);
            }}
            options={options}
            placeholder="Calle 1234"
          />
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="departamento">
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
    </AddressRowContainer>
  );
};

export default AddressRow;
