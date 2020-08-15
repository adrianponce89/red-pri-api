import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import fetch from 'isomorphic-fetch';
import { LoadableButton } from '../../Loadable';

const EmailSignUpMethod = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const resJson = await res.json();
    setLoading(false);
    if (res.status === 200) {
      props.onSetProfile(resJson.user);
      props.onClose();
    } else {
      setMessage(resJson.error);
    }
  }
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse con E-mail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center d-flex flex-column align-items-center">
          <p>
            Ingresa tu email y eligí una contraseña para crear una
            cuenta nueva
          </p>
          <Form className="pb-2" onSubmit={submit}>
            <Form.Group controlId="email">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Contraseña"
              />
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
          <a href="#" onClick={props.onSelectSignUp}>
            {'< '}Volver a otros metodos de registro
          </a>
        </Container>
      </Modal.Body>
    </>
  );
};
export default EmailSignUpMethod;
