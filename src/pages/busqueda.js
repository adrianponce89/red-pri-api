import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import fetch from 'isomorphic-fetch';
import { server } from '../config';
import Container from '../components/Container';
import ProfesionalCard from '../components/Search/ProfesionalCard';
import Popular from '../components/Popular';
import FAIcon from '../components/FAIcon';

const Articulos = ({ users }) => (
  <Container>
    <Row>
      <Col md="3" className="mb-2">
        <div className="applied-filters">
          <h3>Resultados para:</h3>
          <p>tag1, tag2</p>
        </div>

        <div>filtros</div>
      </Col>
      <Col md="9">
        <div className="d-flex justify-content-end pb-2">
          <Nav variant="pills" defaultActiveKey="/busqueda#listado">
            <Nav.Item>
              <Nav.Link href="/busqueda#listado">
                <FAIcon
                  className="fa fa-list"
                  style={{ verticalAlign: 'middle' }}
                />{' '}
                Listado
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/busqueda#mapa">
                <FAIcon
                  className="fa fa-map-marker"
                  style={{ verticalAlign: 'middle' }}
                />{' '}
                Mapa
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div>
          {users.map((user) => (
            <ProfesionalCard key={user._id} {...user} />
          ))}
        </div>
      </Col>
    </Row>
  </Container>
);

export async function getStaticProps() {
  const res = await fetch(`${server}/api/users`);
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}

export default Articulos;
