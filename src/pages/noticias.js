import styled from 'styled-components';
import Container from '../components/Container';
import fetch from "isomorphic-fetch";
import { server } from '../config';

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Noticias = ({ articles }) => (
    <Container>
      <Title>Noticias</Title>
      {articles.map((article) => (
        <div key={article._id}>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      ))}
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

export default Noticias;
