import React, { useState } from 'react';
import styled from 'styled-components';
import FAIcon from '../FAIcon';

const RevealContainer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  margin-right: 1em;
  cursor: ${(props) => (props.show ? 'default' : 'pointer')};
`;

const RevealOnClick = (props) => {
  const [show, setShow] = useState(false);
  return (
    <RevealContainer
      display={props.display ? 1 : 0}
      show={show ? 1 : 0}
    >
      {show ? (
        <>{props.children}</>
      ) : (
        <a onClick={() => setShow(true)}>
          <FAIcon className={`${props.icon}`} /> {props.title}
        </a>
      )}
    </RevealContainer>
  );
};

const ContactText = styled.p`
  margin: 0;
  text-transform: ${({ transform }) =>
    transform ? transform : 'none'};
`;

const ContactInfo = styled((props) => {
  return (
    <div className={props.className}>
      <RevealOnClick
        display={!!props.price ? 1 : 0}
        icon="fa fa-money"
        title="Consulta Particular"
      >
        <ContactText>
          <FAIcon className="fa fa-money" /> ${props.price}
        </ContactText>
      </RevealOnClick>

      <RevealOnClick
        display={!!props.phoneList ? 1 : 0}
        icon="fa fa-phone"
        title="Télefono"
      >
        <>
          {props.phoneList &&
            props.phoneList.map((phone) => (
              <ContactText key={phone._id}>
                <FAIcon className="fa fa-phone" /> {phone.number} (
                {phone.attentionHours})
              </ContactText>
            ))}
        </>
      </RevealOnClick>
      <RevealOnClick
        display={!!props.email ? 1 : 0}
        icon="fa fa-envelope"
        title="Email"
      >
        <ContactText>
          <FAIcon className="fa fa-envelope" /> {props.email}
        </ContactText>
      </RevealOnClick>

      <RevealOnClick
        display={!!props.addressList}
        icon="fa fa-building"
        title="Dirección"
      >
        <>
          {props.addressList &&
            props.addressList.map((address) => (
              <ContactText key={address._id} transform="capitalize">
                <FAIcon className="fa fa-building" />{' '}
                {address.province}, {address.locality},{' '}
                {address.street}
              </ContactText>
            ))}
        </>
      </RevealOnClick>
    </div>
  );
})`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export default ContactInfo;
