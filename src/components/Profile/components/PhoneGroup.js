import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneRow from './PhoneRow';
import RoundButton from './RoundButton';

const PhoneContainer = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  position: relative;
`;

const LineDivider = styled.div`
  border-bottom: 1px solid gray;
  width: 100;
`;

const PhoneGroup = (props) => {
  const { phoneList } = props;

  const onChange = (index, val) => {
    const newList = [
      ...phoneList.slice(0, index),
      val,
      ...phoneList.slice(index + 1),
    ];
    props.onChange(newList);
  };

  const onAdd = () => {
    const newList = [...phoneList, { key: `${Math.random()}` }];
    props.onChange(newList);
  };

  const onRemove = (index) => {
    const newList = [
      ...phoneList.slice(0, index),
      ...phoneList.slice(index + 1),
    ];
    props.onChange(newList);
  };
  return (
    <PhoneContainer>
      <h5>Teléfonos:</h5>
      <LineDivider />
      <RoundButton
        variant="outline-success"
        style={{ margin: 0 }}
        onClick={onAdd}
      >
        +
      </RoundButton>
      {phoneList.map((phone, i) => (
        <PhoneRow
          key={phone._id || phone.key}
          phone={phone}
          onChange={(val) => onChange(i, val)}
          onRemove={() => onRemove(i)}
        />
      ))}
    </PhoneContainer>
  );
};

export default PhoneGroup;
