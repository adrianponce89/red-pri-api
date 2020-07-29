import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from '../components/Container';
import { LoadableButton } from '../components/Loadable';

const CenteredImage = styled.div`
  width: 160px;
  max-width: 160px;
  padding-bottom: 100%;
  background-image: url("${(props) => props.src}");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HoverMessage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(128, 128, 128, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: fill 0.5s;
  color: white;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const ImageSelectorContainer = styled.div`
  width: 160px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

const ImageSelection = ({ src }) => (
  <ImageSelectorContainer>
    <CenteredImage src={src} />
    <HoverMessage>Seleccionar Imagen</HoverMessage>
  </ImageSelectorContainer>
);

const EditarPerfil = (props) => {
  const [email, setEmail] = useState('');
  const [picUrl, setPicUrl] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [matricula, setMatricula] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [specialities, setSpecialities] = useState('');
  const [themes, setThemes] = useState('');
  const [orientations, setOrientations] = useState('');
  const [atentionType, setAtentionType] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.profile) {
      setEmail(props.profile.email);
      setPicUrl(props.profile.picUrl);
      setName(props.profile.name);
      setSurname(props.profile.surname);
      setMatricula(props.profile.matricula);
      setTitle(props.profile.title);
      setAbout(props.profile.about);
      setSpecialities(props.profile.specialities);
      setThemes(props.profile.themes);
      setOrientations(props.profile.orientations);
      setAtentionType(props.profile.atentionType);
      setBio(props.profile.bio);
    }
  }, [props]);

  const handleSubmitxxx = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/users/${props.profile._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        picUrl,
        name,
        surname,
        matricula,
        title,
        about,
        specialities,
        themes,
        orientations,
        atentionType,
        bio,
      }),
    });

    if (res.status === 200) {
      Router.push(`/perfil/${props.profile._id}`);
    } else {
      const resJson = await res.json();
      setLoading(false);
    }
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Form noValidate validated={true} onSubmit={handleSubmit}>
            <Form.Row className="d-flex align-items-end">
              <Form.Group as={Col} md="4" controlId="formGridImage">
                <ImageSelection src="/imgs/ph_bebe_1.jpeg" />
              </Form.Group>
              <Col md="8">
                <Form.Row>
                  <Col md="6">
                    <h2>Editar perfil</h2>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} sd="6" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Nombre"
                    />
                  </Form.Group>
                  <Form.Group as={Col} sd="6" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Apellido"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} sd="6" controlId="titulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Titulo"
                    />
                  </Form.Group>
                  <Form.Group as={Col} sd="6" controlId="matricula">
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Matricula"
                    />
                  </Form.Group>
                </Form.Row>
              </Col>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="4" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Ingrese email"
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un email valido.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      @
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="usuario"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese un nombre de usuario.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="acerca">
                <Form.Label>Acerca de mí</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="4" controlId="especialidades">
                <Form.Label>Especialidades</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Especialidades"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="temas">
                <Form.Label>Temas</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Temas"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="orientaciones">
                <Form.Label>Orientaciones</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Orientaciones"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="practica">
                <Form.Label>Acerca de la práctica</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                required
                as={Col}
                md="4"
                controlId="direccion"
              >
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="Calle 1234" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="departamento">
                <Form.Label>Departamento</Form.Label>
                <Form.Control placeholder="8vo C" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="referencias">
                <Form.Label>Referencias</Form.Label>
                <Form.Control placeholder="Entre Av.Corrientes y Lavalle" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group md="4" as={Col} controlId="localidad">
                <Form.Label>Localidad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Localidad"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese una localidad valida.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" as={Col} controlId="provincia">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Provincia"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese una provincia valida.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" as={Col} controlId="codigopostal">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Código Postal"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un código postal valido.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group md="4" as={Col} controlId="whatsapp">
                <Form.Label>Whatsapp</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Teléfono"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un teléfono valido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" as={Col} controlId="telefono1">
                <Form.Label>Teléfono 1</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" />
                <Form.Control.Feedback type="invalid">
                  Ingrese un teléfono valido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" as={Col} controlId="telefono2">
                <Form.Label>Teléfono 2</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" />
                <Form.Control.Feedback type="invalid">
                  Ingrese un teléfono valido.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <div className="text-right">
              <Button type="submit" size="lg">
                Editar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditarPerfil;
