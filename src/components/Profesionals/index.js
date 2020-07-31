import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import SearchByName from './SearchByName';
import SearchBySpeciality from './SearchBySpeciality';
import SearchByLocation from './SearchByLocation';

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const SelectionContainer = styled.div`
  border: 1px solid #ccc;
  padding: 2em;
  margin: -2px;
  margin-top: 2.5px;
  background: white;
`;

const SMDisplay = styled.p`
  display: none;
  @media (max-width: 576px) {
    display: inline;
  }
`;
const NoSMDisplay = styled.p`
  display: inline;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Profesionals = () => {
  const [selected, setSelected] = useState('bySpeciality');
  return (
    <Card>
      <Card.Body>
        <Title>Encontrá tu profesional</Title>
        <SMDisplay>Buscar por: </SMDisplay>
        <Nav
          defaultActiveKey={selected}
          variant="tabs"
          className="p-2"
        >
          <Nav.Link
            eventKey="bySpeciality"
            onClick={() => setSelected('bySpeciality')}
          >
            <SMDisplay>Especialidad</SMDisplay>
            <NoSMDisplay>Buscar por especialidad</NoSMDisplay>
          </Nav.Link>
          <Nav.Link
            eventKey="byName"
            onClick={() => setSelected('byName')}
          >
            <SMDisplay>Nombre</SMDisplay>
            <NoSMDisplay>Buscar por nombre</NoSMDisplay>
          </Nav.Link>
          <Nav.Link
            eventKey="byLocation"
            onClick={() => setSelected('byLocation')}
          >
            <SMDisplay>Cercanía</SMDisplay>
            <NoSMDisplay>Buscar por cercanía</NoSMDisplay>
          </Nav.Link>
        </Nav>
        <SelectionContainer>
          {selected === 'bySpeciality' ? (
            <SearchBySpeciality />
          ) : selected === 'byName' ? (
            <SearchByName />
          ) : (
            <SearchByLocation />
          )}
        </SelectionContainer>
      </Card.Body>
    </Card>
  );
};

export default Profesionals;
