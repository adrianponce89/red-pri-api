import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import fetch from "isomorphic-fetch";
import { server } from '../../config';
import ArticleCard from '../../components/ArticleCard';
import FAIcon from '../../components/FAIcon';

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
          <div className="d-flex justify-content-between pb-2">
            <Nav variant="pills" defaultActiveKey="/articulos#destacados">
              <Nav.Item>
                <Nav.Link href="/articulos#destacados">Destacados</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/articulos#recientes">Recientes</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button variant="success" href="/crear-articulo" style={{ paddingTop: '1em' }}>
              <FAIcon className="fa fa-pencil-square-o" style={{ verticalAlign: 'middle' }}/>
              {' '}Crear articulo
            </Button>
          </div>
          
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
