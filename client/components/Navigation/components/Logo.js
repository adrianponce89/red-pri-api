import styled from 'styled-components';
import Link from 'next/link';

const LogoContainer = styled.div`
  height: 80px;
  text-align: center;
  width: 140px;
  min-width: 140px;
  text-shadow: 0px 0px 3px #444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
      text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  line-height: 1em;
  margin: 0;
  color: ${({ theme }) => theme.colors.mainOrange};
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 0.6em;
  color: white;
  text-align: center;
  margin: 0;
`;

const Logo = (props) => (
  <LogoContainer className={props.className}>
      <Link href={props.href}>
          <a>
            <Title>Red Pri</Title>
            <SubTitle>Red Interdiciplinaria de Primera Infancia</SubTitle>
          </a>
      </Link>
  </LogoContainer>
  );
  
export default Logo;
