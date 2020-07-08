import styled from 'styled-components';
import Link from 'next/link';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

const NavBar = styled.nav`
  background: ${({ theme }) => theme.colors.mainViolet};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 0 0 6px rgba(0,0,0,0.4);
  box-shadow: 0 0 6px rgba(0,0,0,0.4);
`;

const NavBarContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.main};
  width: 100%;
  align-items: center;
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
    padding: 0 0.5em;
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
        <Logo href="/"/>    
        <NavBarBtn href="/">Inicio</NavBarBtn>
        <NavBarBtn href="/noticias">Noticias</NavBarBtn>
        <NavBarBtn href="/capacitaciones">Capacitaciones</NavBarBtn>
        <NavBarBtn href="/profesionales">Profesionales</NavBarBtn>
        <NavBarBtn href="/preguntas">Preguntas</NavBarBtn>
        <SearchBar />
    </NavBarContainer>
  </NavBar>
  );
  
export default Navigation;

/*

*/