import styled from 'styled-components';
import Container from '../components/Container';
import Button from 'react-bootstrap/Button';

const JoinMessage = styled.h2`
  width: 65%;
  font-size: 30px;
  color: white;
  text-shadow: 0px 0px 5px black;
  text-align: end;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const JoinButton = styled(Button)`
  text-shadow: 0px 0px 5px black;
  font-size: 20px;
  font-weight: bold;
`;

const JoinJustify = styled.div`
  padding: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const JoinBackgound = styled(Container)`
margin: 30px 0 30px;
background:  linear-gradient(
      rgba(20, 20, 20, 0.75), 
      rgba(20, 20, 20, 0.65)
    ), url("${(props) => props.src}");
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
display: flex;
align-items:center;
`;

const BUTTON_TEXT = 'Unirse a la red';
const MESSAGE_TEXT =
  '¿Sos profesional y querés formar parte de nuestra comunidad?';

const JoinUs = (props) => {
  return (
    <JoinBackgound src="/imgs/ph_bebe_1.jpeg">
      <JoinJustify>
        <JoinMessage>{MESSAGE_TEXT}</JoinMessage>
        <JoinButton size="lg" variant="btn btn-outline-info">
          {BUTTON_TEXT}
        </JoinButton>
      </JoinJustify>
    </JoinBackgound>
  );
};

export default styled(JoinUs)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
