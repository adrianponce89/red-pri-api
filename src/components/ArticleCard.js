import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Link from 'next/link';

const ArticleCardImage = styled.img`
  height: auto;
  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    width: 100%;
    top: -50%;
  }
`;

const CardTitle = styled(Card.Title)`
  font-weight: bold;
`;

const ArticleCard = (props) => {
  return (
    <Card text="light" className={props.className}>
      <Card.Body style={{ zIndex: 1 }}>
        <Link href="/buscar?categoria=Lactancia+materna">
          <Card.Text><a>Lactancia Materna</a></Card.Text>
        </Link>
        <Link href={`/articulos/${props._id}`}>
          <CardTitle><a>{props.title}</a></CardTitle>
        </Link>
        <Link href={`/articulos/${props._id}`}>
          <Card.Text>
            <a>{props.content}</a>
          </Card.Text>
        </Link>
        <Card.Text>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
      </Card.Body>
      <Link href={`/articulos/${props._id}`}>
        <a><ArticleCardImage src="/imgs/ph_bebe_1.jpeg" width="200px" height="200"/></a>
      </Link>
    </Card>
  )
}

export default styled(ArticleCard)`
  background: ${({ theme }) => theme.colors.lightOrange};
  margin-bottom: 1em;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  max-height: 200px;
  text-shadow: 0 0 4px #444;
  a {
    cursor: pointer;
  }
`;
