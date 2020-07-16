import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Link from 'next/link';

const CenteredImage = styled.div`
  width: 152px;
  height: 152px;
  background-image: url("${props => props.src}");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 576px) {
    width: 100%;
    padding-bottom: 100%;
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
`

const ArticleCard = (props) => {
  return (
    <Card className={`d-flex flex-sm-row ${props.className}`}>
      <Link href={`/articulos/${props._id}`}>
        <a><CenteredImage src="/imgs/ph_bebe_1.jpeg"/></a>
      </Link>
      <div style={{ zIndex: 1, padding: '1em' }}>
        <Link href="/buscar?categoria=Lactancia+materna">
          <Card.Text><a>Lactancia Materna</a></Card.Text>
        </Link>
        <Link href={`/articulos/${props._id}`}>
          <a><CardTitle>{props.title}</CardTitle></a>
        </Link>
        <Link href={`/articulos/${props._id}`}>
          <ClampedContent>
            <a>{props.content}</a>
          </ClampedContent>
        </Link>
        <Card.Text>
          <p><cite>Nombre Autor</cite></p>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
      </div>
    </Card>
  )
}

export default styled(ArticleCard)`
  margin-bottom: 1em;
  padding: 0;
  border-radius: 0;
  a {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
`;
