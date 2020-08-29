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

const Home = ({ slides, theme, specialitiesList }) => (
  <>
    {slides.length > 0 ? <Carousel slides={slides} /> : ''}
    <Container id="profesionales">
      <Profesionals specialitiesList={specialitiesList} />
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
    <ShareSocialNetwork url={server} />
  </>
);

export async function getServerSideProps() {
  const resSlides = await fetch(`${server}/api/slides`);
  const slides = await resSlides.json();

  const resSuggestions = await fetch(`${server}/api/suggestions`);
  const { specialitiesList } = await resSuggestions.json();

  return {
    props: {
      slides,
      specialitiesList,
    },
  };
}

export default withTheme(Home);
