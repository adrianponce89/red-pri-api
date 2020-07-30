import styled from 'styled-components';
import Landing from '../components/Landing';

const Title = styled.h1`
  font-size: 30px;
  text-align: baseline;
`;

const ContainTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerLanding = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Size = styled.div`
  max-width: 1032px;
  margin-right: auto;
  margin-left: auto;
`;

const BackgraundoLanding = styled.div`
  display: block;
  background-color: white;
`;

const Home = () => (
  <>
    <ContainTitle>
      <Title>Inicio</Title>
    </ContainTitle>
    <BackgraundoLanding>
      <Size>
        <ContainerLanding>
          <Landing
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
            picUrl="/imgs/ph_bebe_1.jpeg"
            title="Titulo3"
            description="description3"
          />
        </ContainerLanding>
      </Size>
    </BackgraundoLanding>
  </>
);

export default Home;
