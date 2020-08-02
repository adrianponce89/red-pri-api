import React, { useState } from 'react';
import styled from 'styled-components';
import FAIcon from '../../FAIcon';

const RevealContainer = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  margin-right: 1em;
`;

const RevealOnClick = (props) => {
  const [show, setShow] = useState(false);
  console.log('title:', props.title, 'display:', props.display);
  return (
    <RevealContainer display={props.display}>
      {show ? (
        <>{props.children}</>
      ) : (
        <a onClick={() => setShow(true)}>
          <FAIcon className={`${props.icon}`} light /> {props.title}
        </a>
      )}
    </RevealContainer>
  );
};

const ContactInfo = styled((props) => {
  return (
    <div className={props.className}>
      <RevealOnClick
        display={!!props.price}
        icon="fa fa-money"
        title="Consulta Particular"
      >
        <FAIcon className="fa fa-money" light /> <p>${props.price}</p>
      </RevealOnClick>
      <RevealOnClick
        display={!!props.phoneList}
        icon="fa fa-phone"
        title="Télefono"
      >
        <>
          {props.phoneList.map((phone) => (
            <p>
              <FAIcon className="fa fa-phone" light /> {phone.number}{' '}
              ({phone.attentionHours})
            </p>
          ))}
        </>
      </RevealOnClick>
      <RevealOnClick
        display={!!props.email}
        icon="fa fa-envelope"
        title="Email"
      >
        <p>
          <FAIcon className="fa fa-envelope" light /> {props.email}
        </p>
      </RevealOnClick>
    </div>
  );
})`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export default ContactInfo;
