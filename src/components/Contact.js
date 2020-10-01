import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Container from '../components/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { LoadableButton } from '../components/Loadable';
import { showModal } from '../redux/slices/modalSlice';

const Title = styled.h2`
  font-weight: bold;
`;

const Spam = styled.samp`
  font-size: 20px;
`;

const ContainTitleSpam = styled.div`
  color: ${({ theme }) => theme.colors.mainText};
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainFormControl = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormControls = styled(FormControl)`
  width: 46%;
`;

const ContainButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        content,
      }),
    });

    if (res.status === 201) {
      dispatch(
        showModal({ step: 'MessageRecieved', email, content }),
      );
    }
    setLoading(false);
    setName('');
    setEmail('');
    setContent('');
  };

  return (
    <Container {...props}>
      <ContainTitleSpam>
        <Title>
          <a>Contactanos</a>
        </Title>
        <Spam>
          <a>
            Si tenés alguna consulta, no dudes en contactarte con
            nosotros
          </a>
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
          <FormControl
            as="textarea"
            rows="2"
            placeholder="Escribí acá tu consulta"
            size="lg"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormGroup>
        <ContainButton>
          <LoadableButton
            loading={loading}
            disabled={loading}
            variant="primary"
            type="submit"
            size="lg"
          >
            Enviar
          </LoadableButton>
        </ContainButton>
      </Form>
    </Container>
  );
};

export default styled(Contact)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
