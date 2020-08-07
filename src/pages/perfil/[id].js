import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { server } from '../../config';
import Container from '../../components/Container';
import CenteredImage from '../../components/CenteredImage';
import ContactInfo from '../../components/Search/ProfesionalCard/ContactInfo';

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: 19px;
  flex: 3;
`;

const ContactInfos = styled(ContactInfo)`
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const InfoContainer = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  justify-content: space-between;
`;

const AboutContainer = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

const StyleLine = styled.hr`
  margin: 1rem 0;
  width: 15%;
`;

const Badges = styled(Badge)`
  text-transform: capitalize;
  margin: 2px;
  font-size: 11px;
  padding: 4px;
`;

const BadgeContainer = styled.div`
  margin: 2em 0;
`;

const SubTitle = styled.h5`
  font-weight: bold;
`;

const Perfil = ({ className, user }) => {
  const fullName = `${user.name} ${user.surname} `;
  const matricula = `(Mat.${user.matricula})`;
  return (
    <Container className={className}>
      <Row>
        <Col lg="8" className="pb-2">
          <Card>
            <Card.Body>
              <TopContainer>
                <CenteredImage src="/imgs/ph_bebe_1.jpeg" />
                <InfoContainer>
                  <TitleContainer>
                    <h2>
                      {fullName}
                      <small>{matricula}</small>
                    </h2>
                    <>{user.title}</>
                  </TitleContainer>
                  <ContactInfos
                    price={user.proce}
                    phoneList={user.phoneList}
                    email={user.email}
                    addressList={user.addressList}
                  />
                </InfoContainer>
              </TopContainer>

              <hr></hr>
              <AboutContainer>
                <SubTitle>Acerca de mí</SubTitle>
                <StyleLine />
                <p>{user.about}</p>
              </AboutContainer>
              <AboutContainer>
                <SubTitle>Sobre la práctica</SubTitle>
                <StyleLine />
                <p>{user.practice}</p>
              </AboutContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" className="pb-2">
          <Card>
            <Card.Body>
              <div>
                <BadgeContainer>
                  <SubTitle>Especialidades</SubTitle>
                  <StyleLine />
                  {user.specialities.map((speciality) => (
                    <Badges variant="info">{speciality}</Badges>
                  ))}
                </BadgeContainer>
                <BadgeContainer>
                  <SubTitle>Temáticas</SubTitle>
                  <StyleLine />
                  {user.themes.map((theme) => (
                    <Badges variant="danger">{theme}</Badges>
                  ))}
                </BadgeContainer>
                <BadgeContainer>
                  <SubTitle>Tipos de Atención</SubTitle>
                  <StyleLine />
                  {user.atentionType.map((type) => (
                    <Badges variant="success">{type}</Badges>
                  ))}
                </BadgeContainer>
              </div>
            </Card.Body>
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
