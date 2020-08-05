import React, { useState } from 'react';
import styled from 'styled-components';
import FAIcon from '../../FAIcon';

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

const ContactInfo = styled((props) => {
  return (
    <div className={props.className}>
      <RevealOnClick
        display={!!props.price ? 1 : 0}
        icon="fa fa-money"
        title="Consulta Particular"
      >
        <FAIcon className="fa fa-money" /> <p>${props.price}</p>
      </RevealOnClick>

      <RevealOnClick
        display={!!props.phoneList ? 1 : 0}
        icon="fa fa-phone"
        title="Télefono"
      >
        <>
          {props.phoneList &&
            props.phoneList.map((phone) => (
              <p key={phone.number}>
                <FAIcon className="fa fa-phone" light />{' '}
                {phone.number} ({phone.attentionHours})
              </p>
            ))}
        </>
      </RevealOnClick>
      <RevealOnClick
        display={!!props.email ? 1 : 0}
        icon="fa fa-envelope"
        title="Email"
      >
        <p>
          <FAIcon className="fa fa-envelope" /> {props.email}
        </p>
      </RevealOnClick>

      <RevealOnClick
        display={!!props.addressList}
        icon="fa fa-building"
        title="Dirección"
      >
        <>
          {props.addressList &&
            props.addressList.map((address) => (
              <p>
                <FAIcon className="fa fa-building" light />{' '}
                {address.province} {address.locality} {address.street}
              </p>
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
