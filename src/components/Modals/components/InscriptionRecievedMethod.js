import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

const InscriptionRecievedMethod = (props) => {
  const email = useSelector((state) => state.modal.email);
  return (
    <>
      <Modal.Header>
        <Modal.Title>Recibimos tu inscripcion!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center d-flex flex-column align-items-center">
          <h5>
            Gracias por inscribirte. Nos vamos a comunicar con tu
            email <b>{email}</b> a la brevedad. <br /> Muchas gracias!
          </h5>
        </Container>
      </Modal.Body>
    </>
  );
};

export default InscriptionRecievedMethod;
