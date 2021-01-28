import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { server } from '../../config';
import FAIcon from '../../components/FAIcon';
import Popular from '../../components/Popular';
import Inscription from '../../components/Inscription';

const CenterTitle = styled.h1`
  text-align: center;
`;

const FixedButton = styled(Button)`
  position: absolute;
  right: 1em;
  top: 1em;
`;

const MainImage = styled.img`
  width: 60%;
  margin-bottom: 20px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Evento = ({ className, event, popular }) => {
  const profile = useSelector((state) => state.auth.profile);
  useEffect(() => {
    fetch(`/api/events/counter/${event._id}`, {
      method: 'POST',
    });
  }, []);

  return (
    <div className={className}>
      <Row>
        <Col lg="8" className="pb-2">
          <Card>
            <Card.Body>
              <Center>
                <MainImage src={event.picUrl} />
              </Center>
              <Card.Title>
                <CenterTitle>{event.title}</CenterTitle>
              </Card.Title>
              <div
                dangerouslySetInnerHTML={{ __html: event.content }}
              />
              {profile && profile.role === 'admin' ? (
                <FixedButton
                  variant="success"
                  href={`/editar-evento/${event.uid}`}
                >
                  <FAIcon
                    className="fa fa-pencil-square-o"
                    style={{ verticalAlign: 'middle' }}
                  />{' '}
                  Editar
                </FixedButton>
              ) : (
                ''
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" className="pb-2">
          <Popular articles={popular} />
        </Col>
        <Col lg="12" className="pb-2">
          <Card>
            <Inscription eventId={event._id} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const resEvent = await fetch(`${server}/api/events/${params.uid}`);
  const event = await resEvent.json();

  const resPopular = await fetch(
    `${server}/api/articles/?sort=seenCounter&limit=5`,
  );
  const popular = await resPopular.json();

  return {
    props: {
      event,
      popular,
    },
  };
}

export default styled(Evento)`
  padding: 1em;
  img,
  iframe {
    max-width: 100%;
  }
  img {
    height: auto;
  }
`;
