import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import fetch from 'isomorphic-fetch';
import { server } from '../../config';
import Container from '../../components/Container';
import ProfesionalCard from '../../components/Search/ProfesionalCard';
import Filters from '../../components/Search/Filters';
import AvailableFilters from '../../components/Search/AvailableFilters';
import Popular from '../../components/Popular';
import FAIcon from '../../components/FAIcon';
import NavPills from '../../components/NavPills';

const FiltersTitle = styled.h4`
  margin: 0.2em 0;
  font-weight: bold;
`;

const Articulos = ({
  results,
  filters,
  paging,
  availableFilters,
}) => (
  <Container>
    <Row>
      <Col md="3" className="mb-2">
        <div className="applied-filters">
          <FiltersTitle>Resultados para:</FiltersTitle>
          <Filters filters={filters} />
          <h5>{paging.total} Resultados</h5>
          <AvailableFilters availableFilters={availableFilters} />
        </div>
      </Col>
      <Col md="9">
        <div className="d-flex justify-content-end pb-2">
          <NavPills
            defaultActiveKey="/busqueda#listado"
            items={[
              {
                link: '/busqueda#listado',
                icon: 'fa fa-list',
                title: 'Listado',
              },
              {
                link: '/busqueda#mapa',
                icon: 'fa fa-map-marker',
                title: 'Mapa',
              },
            ]}
          />
        </div>
        <div>
          {results.map((user) => (
            <ProfesionalCard key={user._id} {...user} />
          ))}
        </div>
      </Col>
    </Row>
  </Container>
);

export async function getServerSideProps(context) {
  const { params } = context.query;
  const res = await fetch(`${server}/api/search`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      params,
    }),
  });

  const {
    results,
    paging,
    sort,
    availableSorts,
    filters,
    availableFilters,
  } = await res.json();

  return {
    props: {
      results,
      paging,
      sort,
      availableSorts,
      filters,
      availableFilters,
    },
  };
}

export default Articulos;
