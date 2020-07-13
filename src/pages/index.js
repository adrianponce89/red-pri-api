import styled from 'styled-components';
import Container from "react-bootstrap/Container";

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Home = () => (
    <Container>
      <Title>Inicio</Title>
    </Container>
  );

export default Home;
