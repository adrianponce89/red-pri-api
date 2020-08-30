import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Editor } from '@tinymce/tinymce-react';
import { tinyAPIKey, server } from '../config';
import Container from './Container';
import { LoadableButton } from './Loadable';
import ImageSelection from './ImageSelection';

const EditArticle = (props) => {
  const [title, setTitle] = useState(props.title || '');
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || '');
  const [tags, setTags] = useState(
    (props.tags && props.tags.join()) || '',
  );
  const { loading, onSubmit, buttonTitle } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit({
      title,
      content,
      category,
      tags: tags.split(',').map((v) => v.trim()),
      file,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg="8" className="pb-2">
            <Card>
              <Card.Body>
                <Form.Group controlId="title">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título (obligatorio)"
                  />
                </Form.Group>
                <Form.Group controlId="content">
                  <Editor
                    apiKey={`${tinyAPIKey}`}
                    initialValue={content}
                    init={{
                      height: 460,
                      menubar: false,
                      language: 'es',
                      images_upload_url: `${server}/api/articles/upload-image`,
                      plugins: [
                        'advlist autolink lists link image',
                        'fullscreen',
                        'media table help wordcount',
                      ],
                      toolbar:
                        'fullscreen | undo redo | formatselect | bold italic underline | \
                          alignleft aligncenter alignright alignjustify | \
                          bullist numlist outdent indent | removeformat | link table image media | help',
                    }}
                    onEditorChange={(content) => setContent(content)}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="pb-2">
            <Card>
              <Card.Header>Completa la publicación</Card.Header>
              <Card.Body>
                <Form.Group controlId="formGridImage">
                  <Form.Label>Imagen principal</Form.Label>
                  <ImageSelection
                    style={{ borderRadius: '1em', width: '100%' }}
                    src={fileURL || props.picUrl}
                    onChange={(event) => {
                      setFile(event.target.files[0]);
                      setFileURL(
                        URL.createObjectURL(event.target.files[0]),
                      );
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    as="select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Elegir categoria...</option>
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
                  <Form.Control
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Ingresa etiquetas separándolas por comas."
                  />
                </Form.Group>
                <LoadableButton
                  loading={loading}
                  disabled={loading}
                  type="submit"
                  block
                >
                  {buttonTitle}
                </LoadableButton>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default EditArticle;
