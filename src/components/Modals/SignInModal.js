import Link from 'next/link';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';

const FontAwesomeIcon = styled.i`
  font-size: 1.1em;
`;

const SignInModal = (props) => (
    <Modal
      show={props.show}
      onHide={props.onClose}
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Ingresa a Red-Pri</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center d-flex flex-column align-items-center">
        <p>
          Ingresa para ver contenido adicional, configurar alertas y seguir autores de tu interes.
        </p>
        <Col xs className="d-flex flex-column p-3 col-sm-8">
          <Button variant="outline-primary" className="m-2 pl-sm-5 text-left">
            <FontAwesomeIcon className="fa fa-google" aria-hidden="true">
            </FontAwesomeIcon>{' '}Ingresar con Google
          </Button>
          <Button variant="outline-info" className="m-2 pl-sm-5 text-left">
            <FontAwesomeIcon className="fa fa-facebook-official" aria-hidden="true">
            </FontAwesomeIcon>{' '}Ingresar con Facebook
          </Button>
          <Button variant="outline-secondary" className="m-2 pl-sm-5 text-left">
            <FontAwesomeIcon className="fa fa-envelope-o" aria-hidden="true">
            </FontAwesomeIcon>{' '}Ingresar con email
          </Button>
        </Col>
        
        <p>
          ¿No tenes una cuenta?{' '}<a href="#" onClick={props.onShowSignUp}>Crea una</a>
        </p>
        <p>
          Para hacer funcionar Red-Pri, guardamos información del usuario. Al hacer click en “Ingresar” aceptas los <Link href="/"><a>terminos y condiciones</a></Link>
        </p>
        </Container>
      </Modal.Body>
    </Modal>
  );

  export default SignInModal;
