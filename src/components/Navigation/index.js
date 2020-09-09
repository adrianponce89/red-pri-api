// ./src/components/Navbar.js
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import SearchBar from './components/SearchBar';
import FAIcon from '../FAIcon';
import { withRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Navigation = (props) => {
  const { pathname } = props.router;

  const profile = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logout());
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={props.className}
    >
      <Navbar.Brand href="/" className="p-0">
        <img
          src="/imgs/red-pri-logo.png"
          alt="Red-Pri Red interdiciplinaria de la primera infancia"
          width="73"
          height="64"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={pathname}>
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/articulos">Articulos</Nav.Link>
          <Nav.Link href="/#profesionales">Profesionales</Nav.Link>
          {!!profile && profile.role === 'admin' ? (
            <Nav.Link href="/administrar">
              <FAIcon className="fa fa-unlock-alt" /> Administrar
            </Nav.Link>
          ) : (
            ''
          )}
        </Nav>
        <div className="m-2">
          <SearchBar />
        </div>
        {!!profile ? (
          <Nav>
            {/* <Nav.Link>
              <FAIcon className="fa fa-bookmark" />
            </Nav.Link>
            <Nav.Link>
              <FAIcon className="fa fa-bell" />
            </Nav.Link>
            <Nav.Link>
              <FAIcon className="fa fa-shopping-cart" />
            </Nav.Link> */}
            <NavDropdown
              title={profile.email}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href={`/perfil/${profile.username}`}>
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => signout()}>
                Salir
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link></Nav.Link>
          </Nav>
        ) : (
          <>
            <Button
              variant="outline-light"
              className="m-2"
              onClick={props.onShowSignUp}
            >
              Registrarse
            </Button>
            <Button variant="success" onClick={props.onShowSignIn}>
              Ingresar
            </Button>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const styledNavBar = styled(withRouter(Navigation))`
  background: ${({ theme }) => theme.colors.mainViolet};
  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  border: none;
  text-align: center;
`;

export default styledNavBar;
