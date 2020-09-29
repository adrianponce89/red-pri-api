import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { server } from '../../config';
import FAIcon from '../../components/FAIcon';
import Popular from '../../components/Popular';
import { useSelector } from 'react-redux';

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
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Articulo = ({ className, article, articles, popular }) => {
  const profile = useSelector((state) => state.auth.profile);
  useEffect(() => {
    fetch(`/api/articles/counter/${article._id}`, {
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
                <MainImage src={article.picUrl} />
              </Center>
              <Card.Title>
                <CenterTitle>{article.title}</CenterTitle>
              </Card.Title>
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              {profile && profile._id === article.author._id ? (
                <FixedButton
                  variant="success"
                  href={`/editar-articulo/${article.uid}`}
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
      </Row>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const resArticle = await fetch(
    `${server}/api/articles/${params.uid}`,
  );
  const article = await resArticle.json();

  const resArticles = await fetch(`${server}/api/articles`);
  const articles = await resArticles.json();

  const resPopular = await fetch(
    `${server}/api/articles/?sort=seenCounter&limit=5`,
  );
  const popular = await resPopular.json();

  return {
    props: {
      article,
      articles,
      popular,
    },
  };
}

export default styled(Articulo)`
  padding: 1em;
  img,
  iframe {
    max-width: 100%;
  }
  img {
    height: auto;
  }
`;
