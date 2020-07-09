import styled from 'styled-components';
import Container from '../components/Container';

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.mainGreen};
  font-family: ${({ theme }) => theme.fonts.rounded};
`;

const MyFirstView = () => (
    <Container>
      <Title>Hola Mundo</Title>
    </Container>
  );

export default MyFirstView;
