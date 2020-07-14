import styled from "styled-components";
import Card from "react-bootstrap/Card";

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
        <Card.Text>Lactancia Materna</Card.Text>
        <CardTitle>{props.title}</CardTitle>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Card.Text>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
      </Card.Body>
      <ArticleCardImage src="/imgs/ph_bebe_1.jpeg" width="200px" height="200"/>
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
`;
