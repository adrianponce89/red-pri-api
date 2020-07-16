// ./src/components/Navbar.js
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchBar from './components/SearchBar';
import { withRouter } from 'next/router';

const Navigation = (props) => {
  const navbarStyle = { marginBottom: '25px' };
  const { pathname } = props.router;
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
          <Nav.Link href="/profesionales">Profesionales</Nav.Link>
          <NavDropdown title="Capacitacion" id="basic-nav-dropdown">
            <NavDropdown.Item href="/cursos">Cursos</NavDropdown.Item>
            <NavDropdown.Item href="/seminarios">
              Seminarios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="m-2">
          <SearchBar />
        </Form>
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
