import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { timeSince } from '../utils';

const RankNumber = styled.h2`
  color: rgba(0, 0, 0, 0.15);
  font-size: 34px;
  padding: 0 12px;
`;

const RankTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin-top: 4px;
`;

const RankedArticle = styled.div`
  display: flex;
  align-items: flex-start;
  p {
    margin: 0;
  }
  margin-bottom: 1em;
`;

const HeaderTitle = styled.h4`
  font-weight: bold;
`;

const AuthorName = styled.cite`
  display: block;
  text-transform: capitalize;
`;

const Popular = ({ className, articles }) => (
  <Card className={className}>
    <Card.Header>
      <HeaderTitle>Popular en Red-Pri</HeaderTitle>
    </Card.Header>
    <Card.Body>
      {articles.map((article, index) => (
        <RankedArticle key={article._id} className={className}>
          <RankNumber>{index + 1}</RankNumber>
          <div>
            <Link
              href={`/articulos/[id]`}
              as={`/articulos/${article.uid}`}
            >
              <a>
                <RankTitle>{article.title}</RankTitle>
              </a>
            </Link>
            <Card.Text>
              <AuthorName>{article.author.fullName}</AuthorName>

              <small className="text-muted">
                Actualizado hace{' '}
                {timeSince(new Date(article.updatedAt))}
              </small>
            </Card.Text>
          </div>
        </RankedArticle>
      ))}
    </Card.Body>
  </Card>
);

export default styled(Popular)``;
