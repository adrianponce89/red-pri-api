import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { server } from '../../config';
import Container from '../../components/Container';
import CenteredImage from '../../components/CenteredImage';
import ContactInfo from '../../components/Search/ProfesionalCard/ContactInfo';

const ContainerPicTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContainTitle = styled.div`
  color: ${({ theme }) => theme.colors.mainText};
  font-size: 19px;
`;

const ContactInfos = styled(ContactInfo)`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const ContainIn = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
`;

const ClampedContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: horizontal;
`;

const ContaniAbout = styled.div`
  font-size: 16px;
`;

const StyleLine = styled.hr`
  margin: 1rem 0;
  width: 15%;
`;

const Perfil = ({ className, user }) => {
  const NameSurname = `${user.name} ${user.surname} `;
  const matricula = `(Mat.${user.matricula})`;

  console.log('user: ', user);
  return (
    <Container className={className}>
      <Row>
        <Col lg="8" className="pb-2">
          <Card>
            <Container>
              <ContainerPicTitle>
                <CenteredImage src="/imgs/ph_bebe_1.jpeg" />
                <ContainIn>
                  <ContainTitle>
                    <h2>
                      {NameSurname}
                      <small>{matricula}</small>
                    </h2>
                    <>{user.title}</>
                  </ContainTitle>
                  <ContactInfos
                    price={'254.25'}
                    phoneList={user.phoneList}
                    email={user.email}
                    addressList={user.addressList}
                  />
                </ContainIn>
              </ContainerPicTitle>

              <hr></hr>
              <ContaniAbout>
                <h5>Acerca de mí</h5>
                <StyleLine />
                <ClampedContent>{user.about}</ClampedContent>
              </ContaniAbout>
            </Container>
          </Card>
        </Col>
        <Col lg="4" className="pb-2">
          <Card>
            <h2>Contacto</h2>
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
