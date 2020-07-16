import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fetch from "isomorphic-fetch";
import { server } from '../../config';
import ArticleCard from '../../components/ArticleCard';
import Popular from '../../components/Popular';
import FAIcon from '../../components/FAIcon';

const Articulos = ({ className, articles }) => (
    <div className={className}>
      <Row>
        <Col md='4'>
          <Popular articles={articles}/>
        </Col>
        <Col md={{span: 8, order: 'first'}}>
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
          <Card>
            <Card.Body style={{padding: '0.5em'}}>
              {articles.map((article) => (
                <ArticleCard key={article._id} {...article} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
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
  padding: 1em;
`;
