import React, { useState } from 'react';
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
  const { addressList } = props;

  const onChange = (index, val) => {
    const newList = [
      ...addressList.slice(0, index),
      val,
      ...addressList.slice(index + 1),
    ];
    props.onChange(newList);
  };

  const onAdd = () => {
    const newList = [
      ...addressList,
      { key: `${Math.random()}`, street: '' },
    ];
    props.onChange(newList);
  };

  const onRemove = (index) => {
    const newList = [
      ...addressList.slice(0, index),
      ...addressList.slice(index + 1),
    ];
    props.onChange(newList);
  };
  return (
    <AddressContainer key={props.key}>
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
          key={address._id || address.key}
          address={address}
          onChange={(val) => onChange(i, val)}
          onRemove={() => onRemove(i)}
        />
      ))}
    </AddressContainer>
  );
};

export default AddressGroup;
