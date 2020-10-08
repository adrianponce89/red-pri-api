import styled from 'styled-components';
import FAIcon from './FAIcon';
import { Container, Col, Row, Nav } from 'react-bootstrap';

const ContactItem = styled.div`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: 1em;
  line-height: 1em;
  font-weight: bold;
  padding: 0;
  margin: 0.5em;
`;

const ContactLabel = styled.span`
  padding-left: 10px;
`;

const NavigationContainer = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  order: 3;
  height: 100%;
  font-size: 1.2em;
  font-weight: bold;
`;

const LogoRedPri = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px 0;
`;

const LogoObsidian = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const TitleObsidian = styled.p`
  font-size: 1.5em;
  line-height: 1em;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const SubtitleObsidian = styled.p`
  font-size: 1em;
  line-height: 1em;
  padding: 0;
  margin: 0;
`;

const Text = styled.p`
  font-size: 1em;
  line-height: 1em;
  font-weight: bold;
  padding: 0;
  margin: 0.5em;
`;

const LogoNetworkds = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const BrandContainer = styled.div`
  display: flex;
  margin: 5px 0 10px 0;
`;

const BrandTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const OuterContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

const Footer = (props) => (
  <OuterContainer>
    <Container>
      <Row>
        <Col xs="12" sm="4" className="d-flex flex-column">
          <LogoRedPri
            alt="redpri"
            lazyload="/imgs/redpri_logo.svg"
            src="/imgs/redpri_logo.svg"
          />
          <Text>Un desarrollo de:</Text>

          <BrandContainer>
            <LogoObsidian
              alt="obsidian"
              lazyload="/imgs/obsidian_logo.svg"
              src="/imgs/obsidian_logo.svg"
            />
            <BrandTitleContainer>
              <TitleObsidian>Obsidian</TitleObsidian>
              <SubtitleObsidian>
                Adrian Ponce y Roger Coverzola
              </SubtitleObsidian>
            </BrandTitleContainer>
          </BrandContainer>
        </Col>
        <Col
          xs="12"
          sm="4"
          className="d-flex flex-column justify-content-center"
        >
          <ContactItem>
            <FAIcon
              className="fa fa-envelope"
              style={{ verticalAlign: 'middle', fontSize: '20px' }}
            />
            <ContactLabel>info.redpri@gmail.com</ContactLabel>
          </ContactItem>
          <ContactItem>
            <a>
              <LogoNetworkds
                alt="obsidian"
                lazyload="/imgs/whatsapp.svg"
                src="/imgs/whatsapp.svg"
              />
              +549 11 5228 -2115
            </a>
          </ContactItem>
          <ContactItem>
            <a href="https://www.instagram.com/redprimerainfancia/">
              <LogoNetworkds
                alt="obsidian"
                lazyload="/imgs/instagram.svg"
                src="/imgs/instagram.svg"
              />
              /redprimerainfancia
            </a>
          </ContactItem>
          <ContactItem>
            <a href="https://www.facebook.com/somosredpri">
              <LogoNetworkds
                alt="obsidian"
                lazyload="/imgs/facebook.svg"
                src="/imgs/facebook.svg"
              />
              /somosredpri
            </a>
          </ContactItem>
          <ContactItem>
            <FAIcon
              className="fa fa-globe"
              style={{ verticalAlign: 'middle', fontSize: '20px' }}
            />
            <ContactLabel>Buenos Aires, Argentina</ContactLabel>
          </ContactItem>
        </Col>
        <Col xs="12" sm="4">
          <NavigationContainer>
            <Nav className="mr-auto d-flex flex-column">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/articulos">Articulos</Nav.Link>
              <Nav.Link href="/#profesionales">
                Profesionales
              </Nav.Link>
            </Nav>
          </NavigationContainer>
        </Col>
      </Row>
    </Container>
  </OuterContainer>
);

export default Footer;
