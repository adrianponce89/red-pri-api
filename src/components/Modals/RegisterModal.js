import Link from 'next/link';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const RegisterModal = (props) => (
    <Modal
      show={props.show}
      onHide={props.onClose}
      keyboard={false}
      className="text-center"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Unirse a Red-Pri</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
        <p>
          Crea una cuenta para ver contenido adicional, configurar alertas y seguir autores de tu interes.
        </p>
        <Col xs className="d-flex flex-column p-3">
          <Button variant="outline-info" className="m-2">Registrarse con Google</Button>
          <Button variant="outline-info" className="m-2">Registrarse con Facebook</Button>
          <Button variant="outline-info" className="m-2">Registrarse con email</Button>
        </Col>
        
        <p>
          ¿Ya tenes una cuenta?{' '}<Link href="/"><a>Ingresa</a></Link>
        </p>
        <p>
          Para hacer funcionar Red-Pri, guardamos información del usuario. Al hacer click en “Unirse” aceptas los <Link href="/"><a>terminos y condiciones</a></Link>
        </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Cerrar
        </Button>
        <Button variant="success">Unirse</Button>
      </Modal.Footer>
    </Modal>
  );

  export default RegisterModal;
