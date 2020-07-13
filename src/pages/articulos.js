import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetch from "isomorphic-fetch";
import { server } from '../config';
import ArticleCard from '../components/ArticleCard';

const Articulos = ({ className, articles }) => (
    <Container className={className}>
      <Row>
        <Col sm='4'>
          <h2>Popular en Red-Pri</h2>
          {articles.map((article) => (
            <div key={article._id}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))}
        </Col>
        <Col sm={{span: 8, order: 'first'}}>
          {articles.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
        </Col>
      </Row>
    </Container>
  );

export async function getStaticProps() {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  }
}

export default styled(Articulos)`
  padding-top: 1em;
`;
