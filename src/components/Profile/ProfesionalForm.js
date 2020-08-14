import React, { useState } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ImageSelection from './components/ImageSelection';
import AddressGroup from './components/AddressGroup';
import PhoneGroup from './components/PhoneGroup';
import { LoadableButton } from '../Loadable';

const ProfesionalForm = (props) => {
  const profile = props.profile || {};
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [name, setName] = useState(profile.name);
  const [surname, setSurname] = useState(profile.surname);
  const [username, setUsername] = useState(profile.username);
  const [matricula, setMatricula] = useState(profile.matricula);
  const [title, setTitle] = useState(profile.title);
  const [about, setAbout] = useState(profile.about);
  const [specialities, setSpecialities] = useState(
    profile.specialities.join(),
  );
  const [themes, setThemes] = useState(profile.themes.join());
  const [atentionType, setAtentionType] = useState(
    profile.atentionType.join(),
  );
  const [practice, setPractice] = useState(profile.practice);
  const [addressList, setAddressList] = useState(
    profile.addressList || [],
  );
  const [phoneList, setPhoneList] = useState(profile.phoneList || []);
  const [loading, setLoading] = useState(false);

  const postProfileChanges = async () => {
    setLoading(true);
    const data = {
      email,
      name,
      surname,
      username,
      matricula,
      title,
      about,
      specialities: specialities.split(',').map((v) => v.trim()),
      themes: themes.split(',').map((v) => v.trim()),
      atentionType: atentionType.split(',').map((v) => v.trim()),
      practice,
      addressList,
      phoneList,
    };
    if (password.length > 0) data['password'] = password;

    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch(`/api/users/${props.profile._id}`, {
      method: 'PATCH',
      body: fd,
    });

    if (res.status === 200) {
      const resJson = await res.json();
      props.setProfile(resJson.user);
      Router.push(`/perfil/${resJson.user.username}`);
    } else {
      setLoading(false);
    }
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      postProfileChanges();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row className="d-flex align-items-end">
        <Form.Group as={Col} md="4" controlId="formGridImage">
          <ImageSelection
            src={fileURL || profile.picUrl}
            onChange={(event) => {
              setFile(event.target.files[0]);
              setFileURL(URL.createObjectURL(event.target.files[0]));
            }}
          />
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
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} sd="6" controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Apellido"
                value={surname}
                onChange={(event) => {
                  setSurname(event.target.value);
                }}
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
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} sd="6" controlId="matricula">
              <Form.Label>Matricula</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Matricula"
                value={matricula}
                onChange={(event) => {
                  setMatricula(event.target.value);
                }}
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
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
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
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
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
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
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
          <Form.Control
            as="textarea"
            rows="3"
            value={about}
            onChange={(event) => {
              setAbout(event.target.value);
            }}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="especialidades">
          <Form.Label>Especialidades</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Especialidades"
            value={specialities}
            onChange={(event) => {
              setSpecialities(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="temas">
          <Form.Label>Temas</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Temas"
            value={themes}
            onChange={(event) => {
              setThemes(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="orientaciones">
          <Form.Label>Tipo de atención</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tipo de atención"
            value={atentionType}
            onChange={(event) => {
              setAtentionType(event.target.value);
            }}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="practica">
          <Form.Label>Acerca de la práctica</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={practice}
            onChange={(event) => {
              setPractice(event.target.value);
            }}
          />
        </Form.Group>
      </Form.Row>

      <AddressGroup
        addressList={addressList}
        onChange={setAddressList}
      />
      <PhoneGroup phoneList={phoneList} onChange={setPhoneList} />
      <div className="text-right">
        <LoadableButton
          loading={loading}
          disabled={loading}
          type="submit"
          size="lg"
        >
          Guardar
        </LoadableButton>
      </div>
    </Form>
  );
};

export default ProfesionalForm;
