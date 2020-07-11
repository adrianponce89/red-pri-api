import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const EmailSignUpMethod = (props) => (
  <>
    <Modal.Header closeButton>
      <Modal.Title>Registrarse con E-mail</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container className="text-center d-flex flex-column align-items-center">
        <p>
          Ingresa tu email y eligí una contraseña para crear una cuenta nueva
        </p>
        <Form className="pb-2">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Continuar
          </Button>
        </Form>
        <a href="#" onClick={props.onSelectSignUp}>{'< '}Volver a otros metodos de registro</a>
      </Container>
    </Modal.Body>
  </>
)
export default EmailSignUpMethod;
