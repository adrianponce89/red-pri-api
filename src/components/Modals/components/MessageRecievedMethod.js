import React from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

const MessageRecievedMethod = (props) => {
  const email = useSelector((state) => state.modal.email);
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Recibimos tu consulta!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center d-flex flex-column align-items-center">
          <h5>
            Gracias por contactarnos. Nos vamos a comunicar con tu
            email <b>{email}</b> a la brevedad. <br /> Muchas gracias!
          </h5>
        </Container>
      </Modal.Body>
    </>
  );
};
export default MessageRecievedMethod;
