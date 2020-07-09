import styled from 'styled-components';
import Link from 'next/link';
import { withRouter } from 'next/router';
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
  opacity: ${({ active }) => active ? 1 : 0.6 };
  font-size: ${({ active }) => active ? '0.9em' : '0.8em' };;
  :hover {
    opacity: 1;
  }

  div {
    //background: yellow;
    cursor: pointer;
    padding: 0 0.5em;
    text-decoration: none;
    color: white;

    height: 80px;
    line-height: 80px;
  }
`;

const Navigation = (props) => {
  const { pathname } = props.router;
  const navBtns = [
    { route: '/', name: 'Inicio' },
    { route: '/noticias', name: 'Noticias' },
    { route: '/capacitaciones', name: 'Capacitaciones' },
    { route: '/profesionales', name: 'Profesionales' },
    { route: '/preguntas', name: 'Preguntas' },
  ];
  return (
  <NavBar>
    <NavBarContainer>
        <Logo href="/"/>
        {navBtns.map(btn => (
          <NavBarBtn
            key={btn.route}
            href={btn.route}
            active={btn.route === pathname}>
              {btn.name}
          </NavBarBtn>
        ))}
        <SearchBar />
    </NavBarContainer>
  </NavBar>
  )
};
  
export default withRouter(Navigation);

/*

*/