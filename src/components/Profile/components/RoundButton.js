import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const RoundButton = styled(Button)`
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 1;
  margin: 0 5px;
  text-height: 100%;
`;

export default RoundButton;
