import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CrearArticulo = ({ className }) => (
    <Container className={className}>
      <Row>
        <Col lg="8" className="pb-2">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="title">
                  <Form.Label>Título</Form.Label>
                  <Form.Control type="text" placeholder="Título (obligatorio)" />
                </Form.Group>
                <Form.Group controlId="content">
                  <Form.Control as="textarea" rows="3" placeholder="¿Qué quieres compartir? (obligatorio)" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card> 
        </Col>
        <Col lg="4" className="pb-2">
          <Card>
            <Card.Header>Completa la publicación</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control as="select">
                    <option>PSICOLOGIA</option>
                    <option>EDUCACION</option>
                    <option>LITERATURA INFANTIL</option>
                    <option>HISTORIAS</option>
                    <option>SALUD Y NUTRICION</option>
                    <option>EMBARAZO Y MATERNIDAD</option>
                    <option>OCIO Y RECREACION</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Etiquetas</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa etiquetas separándolas por comas." />
                </Form.Group>
                <Button type="submit" block>Publicar</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

export default styled(CrearArticulo)`
  padding-top: 1em;
`;
