import React from 'react';
import styled from 'styled-components';

const ConteinerNotFound = styled.div`
  display: ${(prop) => (!prop.empty ? 'flex' : 'none')};
  justify-content: center;
`;

const MessageNotFound = styled.p`
  font-size: 3em;
`;

const NotFound = ({ empty }) => {
  return (
    <>
      <ConteinerNotFound empty={empty}>
        <MessageNotFound>
          {'No se han encontrado resultados...'}
        </MessageNotFound>
      </ConteinerNotFound>
    </>
  );
};

export default NotFound;
