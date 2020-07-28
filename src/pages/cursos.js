import styled from 'styled-components';
import Container from '../components/Container';
import Course from '../components/Course';

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Cursos = () => (
  <Container>
    <Title>Cursos</Title>
    <Course
      TitleTxt="Lacto"
      img="/imgs/ph_bebe_1.jpeg"
      detail="lo que tenga que decir"
    ></Course>
  </Container>
);

export default Cursos;
