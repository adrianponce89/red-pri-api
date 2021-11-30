import React, { useState } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import fetch from 'isomorphic-fetch';
import { Marker } from '@react-google-maps/api';
import { server } from '../../config';
import { hyphenToSpace, getKeysFromSlugParams } from '../../utils';
import Container from '../../components/Container';
import ProfesionalCard from '../../components/ProfesionalCard';
import Filters from '../../components/Search/Filters';
import AvailableFilters from '../../components/Search/AvailableFilters';
import FAIcon from '../../components/FAIcon';
import NavPills from '../../components/NavPills';
import ResultsMap from '../../components/ResultsMap';
import NoResults from '../../components/Search/NoResults';
import Profesionals from '../../components/Profesionals';

const FiltersTitle = styled.h4`
  margin: 0.2em 0;
  font-weight: bold;
`;

const HideOnSm = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`;

const ShowOnSm = styled.div`
  display: none;
  @media (max-width: 769px) {
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
  pointer-events: none;
  button {
    pointer-events: all;
  }
  z-index: 1500;
`;

const Busqueda = ({ results, filters, paging, availableFilters, titlesList }) => {
  const [show, setShow] = useState(false);
  const [resultType, setResultType] = useState('list');
  return (
    <Container>
      <Profesionals titlesList={titlesList}/>
      <Row className="prueba">
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
              activeKey={resultType}
              items={[
                {
                  onClick: () => setResultType('list'),
                  eventKey: 'list',
                  icon: 'fa fa-list',
                  title: 'Listado',
                },
                {
                  onClick: () => setResultType('map'),
                  eventKey: 'map',
                  icon: 'fa fa-map-marker',
                  title: 'Mapa',
                },
              ]}
            />
          </div>
          {results.length === 0 ? (
            <NoResults />
          ) : resultType === 'list' ? (
            <div>
              {results.map((user) => (
                <ProfesionalCard key={user._id} {...user} />
              ))}
            </div>
          ) : (
            <ResultsMap results={results} />
          )}
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

export async function getServerSideProps({ query }) {
  const params = getKeysFromSlugParams(query.params);
  const qs = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  const res = await fetch(`${server}/api/search?${qs}`);
  const resSuggestions = await fetch(`${server}/api/suggestions`);
  const { titlesList } = await resSuggestions.json();
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
      titlesList,
    },
  };
}

export default Busqueda;
