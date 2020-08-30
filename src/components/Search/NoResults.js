import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const HeaderTitle = styled.h4`
  font-weight: bold;
`;

const NoResults = ({ className }) => (
  <Card className={className}>
    <Card.Body>
      <HeaderTitle>No hay resultados para la busqueda</HeaderTitle>
      <Link href="/#profesionales">
        <a>
          <Card.Text>Realice una nueva busqueda</Card.Text>
        </a>
      </Link>
    </Card.Body>
  </Card>
);

export default styled(NoResults)`
  text-align: center;
`;
