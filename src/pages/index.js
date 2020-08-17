import styled from 'styled-components';
import Landing from '../components/Landing';
import Contact from '../components/Contact';
import JoinUs from '../components/JoinUs';
import Carousel from '../components/Carousel';
import ShareSocialNetworks from '../components/ShareSocialNetworks';
import { server } from '../config';

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

const ShareSocialNetwork = styled(ShareSocialNetworks)`
  width: 150px;
  position: sticky;
  bottom: 20px;
`;

const slides = [
  {
    picUrl: '',
    title: 'Titulo1',
    description:
      'Nostrud aute ut sunt excepteur officia incididunt et.',
  },
  {
    picUrl: '/imgs/ph_bebe_1.jpeg',
    title: 'Titulo2',
    description:
      'Nostrud aute ut sunt excepteur officia incididunt et.',
  },
  {
    picUrl: '/imgs/ph_bebe_1.jpeg',
    title: 'Titulo3',
    description:
      'Nostrud aute ut sunt excepteur officia incididunt et.',
  },
];

const Home = () => (
  <>
    <Carousel slides={slides} />
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
    <JoinUs />
    <Contact />
    <ShareSocialNetwork url={server} />
  </>
);

export default Home;
