import styled, { withTheme } from 'styled-components';
import fetch from 'isomorphic-fetch';
import Landing from '../components/Landing';
import Profesionals from '../components/Profesionals';
import Contact from '../components/Contact';
import JoinUs from '../components/JoinUs';
import Carousel from '../components/Carousel';
import Container from '../components/Container';
import ShareSocialNetworks from '../components/ShareSocialNetworks';
import { server } from '../config';

const LandingContainer = styled.div`
  max-width: 1032px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LandingBackground = styled.div`
  display: block;
  background-color: white;
`;

const ShareSocialNetwork = styled(ShareSocialNetworks)`
  width: 150px;
  position: sticky;
  bottom: 20px;
`;

const Anchor = styled.div`
  position: relative;
  left: 0;
  top: -80px;
  right: 0;
  height: 0;
`;

const Home = ({ slides, theme, titlesList }) => (
  <>
    {slides.length > 0 ? <Carousel slides={slides} /> : ''}
    <Container>
      <Anchor id="profesionales" />

      <Profesionals titlesList={titlesList} />
    </Container>
    <LandingBackground>
      <LandingContainer>
        <Landing
          icon="fa fa-search"
          title="BUSCÁ"
          description="Completa el formulario y encontra el profesional que estés buscando"
          href="/#profesionales"
          color={theme.colors.mainOrange}
        />
        <Landing
          icon="fa fa-newspaper-o"
          title="INFORMATE"
          description="Visitá nuestro blog y encuentra articulos y noticias relevantes a la crianza"
          href="/articulos"
          color={theme.colors.mainGreen}
        />
        <Landing
          icon="fa fa-sign-in"
          title="FORMAR PARTE"
          description="Unite a Red-Pri y forma parte de nuestra red de profesionales"
          href="/crear-perfil"
          color={theme.colors.mainRed}
        />
      </LandingContainer>
    </LandingBackground>
    <JoinUs />
    <Contact />
    <ShareSocialNetwork url="https://www.red-pri.com" />
  </>
);

export async function getServerSideProps() {
  const resSlides = await fetch(`${server}/api/slides`);
  const slides = await resSlides.json();

  const resSuggestions = await fetch(`${server}/api/suggestions`);
  const { titlesList } = await resSuggestions.json();

  return {
    props: {
      slides,
      titlesList,
    },
  };
}

export default withTheme(Home);
