import React, { useState } from 'react';
import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Editor } from '@tinymce/tinymce-react';
import { tinyAPIKey } from '../config';

const CrearArticulo = ({ className }) => {
  const [content, setContent] = useState("");

  const handleEditorChange = (content, editor) => {
    setContent(content);
  }
  return (
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
                  <Editor
                    apiKey={`${tinyAPIKey}`}
                    initialValue={content}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic underline | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | image link | help'
                    }}
                    onEditorChange={handleEditorChange}
                  />
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
  )
};

export default styled(CrearArticulo)`
  padding-top: 1em;
`;
