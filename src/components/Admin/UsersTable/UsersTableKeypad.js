import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { LoadableButton } from '../../Loadable';

const FloatingButton = styled(LoadableButton)`
  padding: 1em;
`;

const UsersTableKeypad = ({
  display,
  deletes,
  loading,
  handleAllSelectedDelete,
}) => {
  return (
    <>
      <Container fluid="sm">
        <Row>
          <Col />
          <Col xs lg="2" style={{ display: 'contents' }}>
            <FloatingButton
              style={{
                fontWeight: 'bold',
                display: `${display ? 'inline-block' : 'none'}`,
              }}
              variant="success"
              loading={loading}
              onClick={handleAllSelectedDelete}
            >{`Borrar ${deletes}`}</FloatingButton>
            <FloatingButton href="/crear-perfil" variant="success">
              Crear Nuevo Perfil
            </FloatingButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UsersTableKeypad;
