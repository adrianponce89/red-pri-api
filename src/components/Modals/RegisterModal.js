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
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Unirse a Red-Pri</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="text-center d-flex flex-column align-items-center">
        <p>
          Crea una cuenta para ver contenido adicional, configurar alertas y seguir autores de tu interes.
        </p>
        <Col xs className="d-flex flex-column p-3 col-8">
          <Button variant="outline-info" className="m-2">Unirse con Google</Button>
          <Button variant="outline-info" className="m-2">Unirse con Facebook</Button>
          <Button variant="outline-info" className="m-2">Unirse con email</Button>
        </Col>
        
        <p>
          ¿Ya tenes una cuenta?{' '}<Link href="/"><a>Ingresa</a></Link>
        </p>
        <p>
          Para hacer funcionar Red-Pri, guardamos información del usuario. Al hacer click en “Unirse” aceptas los <Link href="/"><a>terminos y condiciones</a></Link>
        </p>
        </Container>
      </Modal.Body>
    </Modal>
  );

  export default RegisterModal;
