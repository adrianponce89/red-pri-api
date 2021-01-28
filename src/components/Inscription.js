import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Container from '../components/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { LoadableButton } from '../components/Loadable';
import { showModal } from '../redux/slices/modalSlice';

const ContainTitleSpam = styled.div`
  color: ${({ theme }) => theme.colors.mainText};
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Spam = styled.samp`
  font-size: 20px;
`;
const Title = styled.h2`
  font-weight: bold;
`;
const FormControls = styled(FormControl)`
  width: 45%;
`;
const ContainFormControl = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ContainButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Inscription = ({ eventId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
        eventId,
        utm_source,
      }),
    });

    if (res.status === 201) {
      dispatch(
        showModal({ step: 'InscriptionRecieved', email, content }),
      );
    }

    setLoading(false);
    setName('');
    setEmail('');
    setUdi('');
    setutmSource('');
  };

  return (
    <Container>
      <ContainTitleSpam>
        <Title>
          <a>¡Inscribite!</a>
        </Title>
        <Spam>
          <a>Participa de nuestras actividades</a>
        </Spam>
      </ContainTitleSpam>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <ContainFormControl>
            <FormControls
              tipe="text"
              placeholder="Tu nombre"
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormControls
              tipe="email"
              placeholder="Tu e-mail"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ContainFormControl>
        </FormGroup>
        <ContainButton>
          <LoadableButton
            loading={loading}
            disabled={loading}
            variant="primary"
            type="submit"
            size="lg"
          >
            Inscribirse
          </LoadableButton>
        </ContainButton>
      </Form>
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
