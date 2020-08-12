import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { timeSince } from '../utils';

const CenteredImage = styled.div`
  width: 160px;
  height: 160px;
  background-image: url("${(props) => props.src}");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 576px) {
    width: 100%;
    padding-bottom: 75%;
  }
`;

const CardTitle = styled.h4`
  font-weight: bold;
`;

const ClampedContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

const AuthorName = styled.cite`
  display: block;
  text-transform: capitalize;
`;

const ArticleCard = (props) => {
  return (
    <Card className={`d-flex flex-sm-row ${props.className}`}>
      <Link href={`/articulos/${props.uid}`}>
        <a>
          <CenteredImage src="/imgs/ph_bebe_1.jpeg" />
        </a>
      </Link>
      <div style={{ zIndex: 1, padding: '1em' }}>
        <Link
          href={`/busqueda/temas-${props.category.toLowerCase()}`}
        >
          <Card.Text>
            <a>{props.category.toUpperCase()}</a>
          </Card.Text>
        </Link>
        <Link href={`/articulos/${props.uid}`}>
          <a>
            <CardTitle>{props.title}</CardTitle>
          </a>
        </Link>
        <Link href={`/articulos/${props.uid}`}>
          <ClampedContent>{props.content}</ClampedContent>
        </Link>
        <Card.Text>
          <AuthorName>{props.author.fullName}</AuthorName>

          <small className="text-muted">
            Actualizado hace {timeSince(new Date(props.updatedAt))}
          </small>
        </Card.Text>
      </div>
    </Card>
  );
};

export default styled(ArticleCard)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  a {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
`;
