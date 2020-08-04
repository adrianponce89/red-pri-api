import styled from 'styled-components';
import Container from '../components/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
  return (
    <Container>
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
      <Form>
        <FormGroup>
          <ContainFormControl>
            <FormControls
              tipe="text"
              placeholder="Tu nombre"
              size="lg"
            />
            <FormControls
              tipe="email"
              placeholder="Tu e-mail"
              size="lg"
            />
          </ContainFormControl>
          <FormControl
            as="textarea"
            rows="2"
            placeholder="Escribí acá tu consulta"
            size="lg"
          />
        </FormGroup>
        <ContainButton>
          <Button variant="primary" type="submit" size="lg">
            Enviar
          </Button>
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
