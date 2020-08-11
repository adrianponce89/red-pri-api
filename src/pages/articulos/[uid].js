import React, { useState } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { server } from '../../config';
import Popular from '../../components/Popular';

const CenterTitle = styled.h1`
  text-align: center;
`;

const Articulo = ({ className, article, articles }) => {
  return (
    <div className={className}>
      <Row>
        <Col lg="8" className="pb-2">
          <Card>
            <Card.Body>
              <Card.Title>
                <CenterTitle>{article.title}</CenterTitle>
              </Card.Title>
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" className="pb-2">
          <Popular articles={articles} />
        </Col>
      </Row>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  // Get the paths we want to pre-render based on articles
  const paths = articles.map((post) => ({
    params: { uid: post.uid },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the article `uid`.
  // If the route is like /articles/1, then params.uid is 1
  const resArticle = await fetch(
    `${server}/api/articles/${params.uid}`,
  );
  const article = await resArticle.json();

  const resArticles = await fetch(`${server}/api/articles`);
  const articles = await resArticles.json();

  // Pass article data to the page via props
  return {
    props: {
      article,
      articles,
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
