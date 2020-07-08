import styled from 'styled-components';
import Link from 'next/link';

const NavBar = styled.nav`
  background: ${({ theme }) => theme.colors.lightGreen};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

const NavBarContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.main};
  width: 100%;
  max-width: 1032px;
`;

const NavBarBtn = styled((props) => (
  <li className={props.className}>
    <Link href={props.href}><div>{props.children}</div></Link>
  </li>
))`
  list-style-type:none;
  transition: 0.3s;
  :hover {
    background: ${({ theme }) => theme.colors.mainGreen};
  }
  div {
    //background: yellow;
    cursor: pointer;
    padding: 0 1em;
    text-decoration: none;
    color: white;
    font-size: 1em;
    height: 80px;
    line-height: 80px;
  }
`;

const Navigation = () => (
  <NavBar>
    <NavBarContainer>
        <Link href="/">
          <a>
          <img width="256" height="80" src="/imgs/NavBarIcon.png" alt="Red Interdiciplinaria de Primera Infancia" />
          </a>
        </Link>
        <NavBarBtn href="/">Inicio</NavBarBtn>
        <NavBarBtn href="/noticias">Noticias</NavBarBtn>
        <NavBarBtn href="/capacitaciones">Capacitaciones</NavBarBtn>
        <NavBarBtn href="/profesionales">Profesionales</NavBarBtn>
        <NavBarBtn href="/preguntas">Preguntas</NavBarBtn>
    </NavBarContainer>
  </NavBar>
  );
  
export default Navigation;
