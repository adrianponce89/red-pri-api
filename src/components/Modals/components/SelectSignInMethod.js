import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import FAIcon from '../../FAIcon';

const SelectSignInMethod = (props) => (
  <>
    <Modal.Header closeButton>
      <Modal.Title>Ingresá a Red-Pri</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container className="text-center d-flex flex-column align-items-center">
        <p>
          Ingresá para ver contenido adicional, configurar alertas y
          seguir autores de tu interés.
        </p>
        <Col xs className="d-flex flex-column p-3 col-sm-8">
          {/* <Button variant="outline-primary" className="m-2 pl-sm-5 text-left">
            <FAIcon className="fa fa-google" />{' '}Ingresar con Google
          </Button>
          <Button variant="outline-info" className="m-2 pl-sm-5 text-left">
            <FAIcon className="fa fa-facebook-official" />{' '}Ingresar con Facebook
          </Button> */}
          <Button
            variant="outline-secondary"
            className="m-2 pl-sm-5 text-left"
            onClick={props.onEmailMethod}
          >
            <FAIcon className="fa fa-envelope-o" /> Ingresar con email
          </Button>
        </Col>

        <p>
          ¿No tenés una cuenta?{' '}
          <a href="#" onClick={props.onSelectSignUp}>
            Crea una
          </a>
        </p>
        <p>
          Para hacer funcionar Red-Pri, guardamos información del
          usuario. Al hacer click en “Ingresar” aceptas los{' '}
          <Link href="/">
            <a>terminos y condiciones</a>
          </Link>
        </p>
      </Container>
    </Modal.Body>
  </>
);

export default SelectSignInMethod;
