import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fetch from 'isomorphic-fetch';
import { server } from '../../config';
import Container from '../../components/Container';
import ArticleCard from '../../components/ArticleCard';
import Popular from '../../components/Popular';
import NavPills from '../../components/NavPills';
import FAIcon from '../../components/FAIcon';

const Articulos = ({ articles }) => (
  <Container>
    <Row>
      <Col md="4" className="mb-2">
        <Popular articles={articles} />
      </Col>
      <Col md={{ span: 8, order: 'first' }}>
        <div className="d-flex justify-content-between pb-2">
          <NavPills
            defaultActiveKey="/articulos#destacados"
            items={[
              {
                link: '/articulos#destacados',
                title: 'Destacados',
              },
              {
                link: '/articulos#recientes',
                title: 'Recientes',
              },
            ]}
          />
          <Button
            variant="success"
            href="/crear-articulo"
            style={{ paddingTop: '1em' }}
          >
            <FAIcon
              className="fa fa-pencil-square-o"
              style={{ verticalAlign: 'middle' }}
            />{' '}
            Crear articulo
          </Button>
        </div>
        <div>
          {articles.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
        </div>
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
  };
}

export default Articulos;
