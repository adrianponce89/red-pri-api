import React, { useState } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import fetch from 'isomorphic-fetch';
import { server } from '../../config';
import { hyphenToSpace, getKeysFromSlugParams } from '../../utils';
import Container from '../../components/Container';
import ProfesionalCard from '../../components/Search/ProfesionalCard';
import Filters from '../../components/Search/Filters';
import AvailableFilters from '../../components/Search/AvailableFilters';
import FAIcon from '../../components/FAIcon';
import NavPills from '../../components/NavPills';

const FiltersTitle = styled.h4`
  margin: 0.2em 0;
  font-weight: bold;
`;

const HideOnSm = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

const ShowOnSm = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;

const FilterButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const Busqueda = ({ results, filters, paging, availableFilters }) => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Row>
        <Col md="3" className="mb-2">
          <div className="applied-filters">
            <FiltersTitle>Resultados para:</FiltersTitle>
            <Filters filters={filters} />
            <h5>{paging.total} Resultados</h5>
            <HideOnSm>
              <AvailableFilters availableFilters={availableFilters} />
            </HideOnSm>
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
      <ShowOnSm>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Filtros</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AvailableFilters availableFilters={availableFilters} />
          </Modal.Body>
        </Modal>
        <FilterButtonContainer>
          <Button variant="danger" onClick={() => setShow(true)}>
            <FAIcon
              className="fa fa-filter"
              style={{ verticalAlign: 'middle' }}
            />{' '}
            Mostrar Filtros
          </Button>
        </FilterButtonContainer>
      </ShowOnSm>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const params = getKeysFromSlugParams(context.query.params);
  const qs = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  const res = await fetch(`${server}/api/search?${qs}`);
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

export default Busqueda;
