import styled from 'styled-components';
import Link from 'next/link';

const LogoContainer = styled.div`
  height: 64px;
  text-align: center;
  width: 138px;
  min-width: 138px;
  text-shadow: 0px 0px 3px #444;
  font-family: ${({ theme }) => theme.fonts.rounded};
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
      text-decoration: none;
  }
  @media (max-width: 576px) {
    height: 34px;
    min-width: 94px;
    width: 94px;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  line-height: 1em;
  margin: 0;
  color: ${({ theme }) => theme.colors.mainOrange};
  text-align: center;
  @media (max-width: 576px) {
    font-size: 1.6em;
  }
`;

const SubTitle = styled.h2`
  font-size: 0.6em;
  color: white;
  text-align: center;
  margin: 0;
  white-space: break-spaces;
  @media (max-width: 576px) {
    font-size: 0.4em;
  }
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
