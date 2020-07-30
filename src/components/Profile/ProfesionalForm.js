import React, { useState, useEffect } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picUrl, setPicUrl] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [matricula, setMatricula] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [specialities, setSpecialities] = useState('');
  const [themes, setThemes] = useState('');
  const [atentionType, setAtentionType] = useState('Particular');
  const [practice, setPractice] = useState('');
  const [addressList, setAddressList] = useState([]);
  const [phoneList, setPhoneList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { profile } = props;
    if (profile) {
      setEmail(profile.email);
      setPicUrl(profile.picUrl);
      setName(profile.name);
      setSurname(profile.surname);
      setUsername(profile.username);
      setMatricula(profile.matricula);
      setTitle(profile.title);
      setAbout(profile.about);
      setSpecialities(profile.specialities);
      setThemes(profile.themes);
      setAtentionType(profile.atentionType);
      setPractice(profile.practice);
      setAddressList(profile.addressList);
      setPhoneList(profile.phoneList);
    }
  }, [props]);

  const postProfileChanges = async () => {
    setLoading(true);
    const params = {
      email,
      picUrl,
      name,
      surname,
      username,
      matricula,
      title,
      about,
      specialities,
      themes,
      atentionType,
      practice,
      addressList,
      phoneList,
    };
    if (password.length > 0) params['password'] = password;

    const res = await fetch(`/api/users/${props.profile._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (res.status === 200) {
      const resJson = await res.json();
      props.setProfile(resJson.user);
      Router.push(`/perfil/${props.profile._id}`);
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
