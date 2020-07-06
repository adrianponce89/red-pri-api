import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const MyFirstView = () => (
    <section>
      <Title>Hola Mundo</Title>
    </section>
  );
  
export default MyFirstView;
