import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import AddressRow from './AddressRow';
import RoundButton from './RoundButton';

const AddressContainer = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  position: relative;
`;

const LineDivider = styled.div`
  border-bottom: 1px solid gray;
  width: 100;
`;

const AddressGroup = (props) => {
  const [addressList, setAddressList] = useState(props.addressList);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && props.addressList) {
      console.log('cargando addressList', props.addressList);
      setAddressList(props.addressList);
      setLoaded(true);
    }
  }, [props]);

  const onChange = (index, val) => {
    const newList = [
      ...addressList.slice(0, index),
      val,
      ...addressList.slice(index + 1),
    ];
    setAddressList(newList);
    props.onChange(addressList);
  };

  const onAdd = () => {
    const newList = [...addressList, {}];
    setAddressList(newList);
    props.onChange(addressList);
  };

  const onRemove = (index) => {
    const newList = [
      ...addressList.slice(0, index),
      ...addressList.slice(index + 1),
    ];
    setAddressList(newList);
    props.onChange(addressList);
  };
  return (
    <AddressContainer>
      <h5>Direcciones:</h5>
      <LineDivider />
      <RoundButton
        variant="outline-success"
        style={{ margin: 0 }}
        onClick={onAdd}
      >
        +
      </RoundButton>
      {addressList.map((address, i) => (
        <AddressRow
          address={address}
          onChange={(val) => onChange(i, val)}
          onRemove={() => onRemove(i)}
        />
      ))}
    </AddressContainer>
  );
};

export default AddressGroup;
