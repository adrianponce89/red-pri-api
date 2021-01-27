import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Container from '../components/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { LoadableButton } from '../components/Loadable';
import { showModal } from '../redux/slices/modalSlice';

const Inscription = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uid, setUdi] = useState('');
  const [utm_source, setutmSource] = useState('');

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch('/api/inscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        uid,
        utm_source,
      }),
    });

    setLoading(false);
    setName('');
    setEmail('');
    setUdi('');
    setutmSource('');
  };

  return (
    <Container {...props}>
      <ContainTitleSpam>
        <Title>
          <a>¡Inscribite!</a>
        </Title>
        <Spam>
          <a>Participa de nuestras actividades</a>
        </Spam>
      </ContainTitleSpam>
      <Form onSubmit={handleSubmit}></Form>
    </Container>
  );
};

export default styled(Inscription)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
