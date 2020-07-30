import React, { useState, useEffect } from 'react';
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
  const [phoneList, setPhoneList] = useState(props.phoneList);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && props.phoneList) {
      setPhoneList(props.phoneList);
      setLoaded(true);
    }
  }, [props]);

  const onChange = (index, val) => {
    const newList = [
      ...phoneList.slice(0, index),
      val,
      ...phoneList.slice(index + 1),
    ];
    setPhoneList(newList);
    props.onChange(phoneList);
  };

  const onAdd = () => {
    const newList = [...phoneList, {}];
    setPhoneList(newList);
    props.onChange(phoneList);
  };

  const onRemove = (index) => {
    const newList = [
      ...phoneList.slice(0, index),
      ...phoneList.slice(index + 1),
    ];
    setPhoneList(newList);
    props.onChange(phoneList);
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
      {phoneList.map((address, i) => (
        <PhoneRow
          address={address}
          onChange={(val) => onChange(i, val)}
          onRemove={() => onRemove(i)}
        />
      ))}
    </PhoneContainer>
  );
};

export default PhoneGroup;
