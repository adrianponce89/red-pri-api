import styled from 'styled-components';
import Container from '../components/Container';
import Course from '../components/Course';
import fetch from 'isomorphic-fetch';
import { server } from '../config';

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const GrupCurse = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Cursos = ({ courses }) => (
  <Container>
    <Title>Cursos</Title>
    <GrupCurse>
      {courses.map((course) => (
        <Course
          title={course.title}
          picUrl={course.picUrl}
          description={course.description}
        />
      ))}
    </GrupCurse>
  </Container>
);

export async function getStaticProps() {
  const res = await fetch(`${server}/api/courses`);
  const courses = await res.json();
  return {
    props: {
      courses,
    },
  };
}

export default Cursos;
