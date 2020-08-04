import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { server } from '../../config';
import Container from '../../components/Container';

const CenterTitle = styled.h1`
  text-align: center;
`;

const Perfil = ({ className, user }) => {
  return (
    <Container className={className}>
      <Row>
        <Col lg="8" className="pb-2">
          <Card>
            <Card.Body>
              <CenterTitle>
                {user.name} {user.surname}
                <h3>{user.matricula}</h3>
              </CenterTitle>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {JSON.stringify(user, null, 2)}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" className="pb-2">
          <Card>
            <CenterTitle>Contacto</CenterTitle>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${server}/api/users`);
  const users = await res.json();

  // Get the paths we want to pre-render based on users
  const paths = users.map((post) => ({
    params: { id: post._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the user `id`.
  // If the route is like /users/1, then params.id is 1
  const resUser = await fetch(`${server}/api/users/${params.id}`);
  const user = await resUser.json();

  // Pass user data to the page via props
  return {
    props: {
      user,
    },
  };
}

export default Perfil;
