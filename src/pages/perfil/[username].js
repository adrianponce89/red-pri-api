import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { server, domainURL } from '../../config';
import Container from '../../components/Container';
import CenteredImage from '../../components/CenteredImage';
import ContactInfo from '../../components/ProfesionalCard/ContactInfo';
import ShareSocialNetworks from '../../components/ShareSocialNetworks';
import ResultsMap from '../../components/ResultsMap';
import FAIcon from '../../components/FAIcon';

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

const ShareSocialNetwork = styled(ShareSocialNetworks)`
  margin-left: auto;
  width: 125px;
`;

const FixedButton = styled(Button)`
  position: absolute;
  right: 1em;
  top: 1em;
`;

const PreWrap = styled.p`
  white-space: pre-wrap;
`;

const Perfil = ({ className, user, results }) => {
  const fullname = `${user.name} ${user.surname} `;
  const matricula = `(Mat.${user.matricula})`;
  const urlUser = `${domainURL}/perfil/${user.username} `;

  const profile = useSelector((state) => state.auth.profile);
  return (
    <Container className={className}>
      <Row>
        <Col lg="8" className="pb-2">
          <Card>
            <Card.Body>
              <TopContainer>
                <CenteredImage
                  src={user.picUrl}
                  defaultImage="/imgs/userDefault.svg"
                />
                <InfoContainer>
                  <TitleContainer>
                    <h2>
                      {fullname}
                      {!!user.matricula ? (
                        <small>{matricula}</small>
                      ) : (
                        ''
                      )}
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
                {profile && profile._id === user._id ? (
                  <FixedButton
                    variant="success"
                    href={`/editar-perfil`}
                  >
                    <FAIcon
                      className="fa fa-pencil-square-o"
                      style={{ verticalAlign: 'middle' }}
                    />{' '}
                    Editar
                  </FixedButton>
                ) : (
                  ''
                )}
              </TopContainer>
              <ShareSocialNetwork url={urlUser} />
              <hr></hr>
              <AboutContainer>
                <SubTitle>Acerca de mí</SubTitle>
                <StyleLine />
                <PreWrap>{user.about}</PreWrap>
              </AboutContainer>
              <AboutContainer>
                <SubTitle>Sobre la práctica</SubTitle>
                <StyleLine />
                <PreWrap>{user.practice}</PreWrap>
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
                    <Badges key={speciality} variant="info">
                      {speciality}
                    </Badges>
                  ))}
                </BadgeContainer>
                <BadgeContainer>
                  <SubTitle>Temáticas</SubTitle>
                  <StyleLine />
                  {user.themes.map((theme) => (
                    <Badges key={theme} variant="danger">
                      {theme}
                    </Badges>
                  ))}
                </BadgeContainer>
                <BadgeContainer>
                  <SubTitle>Tipos de Atención</SubTitle>
                  <StyleLine />
                  {user.atentionType.map((type) => (
                    <Badges key={type} variant="success">
                      {type}
                    </Badges>
                  ))}
                </BadgeContainer>
              </div>
            </Card.Body>
          </Card>
          {
            results[0].addressList[0] != undefined ? (
              <ResultsMap results={results}/>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  );
};

export async function getServerSideProps({ params }) {
  const resUser = await fetch(
    `${server}/api/users/${params.username}`,
  );
  const user = await resUser.json();

  const qs = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  const res = await fetch(`${server}/api/search?${qs}`);
  const {
    results,
  } = await res.json();

  return {
    props: {
      user,
      results,
    },
  };
}

export default Perfil;
