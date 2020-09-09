import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { LoadableButton } from '../../Loadable';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/slices/authSlice';

const EmailSignInMethod = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loggingIn);
  const message = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  async function submit(event) {
    event.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Ingresar con E-mail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center d-flex flex-column align-items-center">
          <p>Ingresa tu email y contraseña asociado con la cuenta</p>
          <Form className="pb-2" onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Contraseña"
              />
              <Form.Text>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </Form.Text>
              <Form.Text>{message}</Form.Text>
            </Form.Group>

            <LoadableButton
              loading={loading}
              disabled={loading}
              variant="primary"
              type="submit"
            >
              Continuar
            </LoadableButton>
          </Form>
          <a href="#" onClick={props.onSelectSignIn}>
            {'< '}Volver a otros metodos de ingreso
          </a>
        </Container>
      </Modal.Body>
    </>
  );
};
export default EmailSignInMethod;
