import styled from 'styled-components';
import Landing from '../components/Landing';
import Contact from '../components/Contact';
import Joinuns from '../components/Join';

const Title = styled.h1`
  font-size: 30px;
  text-align: baseline;
`;

const ContainTitle = styled.div`
  display: flex;
  justify-content: center;
`;

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

const Home = () => (
  <>
    <ContainTitle>
      <Title>Inicio</Title>
    </ContainTitle>
    <LandingBackground>
      <LandingContainer>
        <Landing
          borderRadius="50%"
          picUrl="/imgs/ph_bebe_1.jpeg"
          title="Titulo1"
          description="description1"
        />
        <Landing
          picUrl="/imgs/ph_bebe_1.jpeg"
          title="Titulo2"
          description="description2"
        />
        <Landing
          borderRadius="10px"
          picUrl="/imgs/ph_bebe_1.jpeg"
          title="Titulo3"
          description="description3"
        />
      </LandingContainer>
    </LandingBackground>
    <Joinuns />
    <Contact />
  </>
);

export default Home;
