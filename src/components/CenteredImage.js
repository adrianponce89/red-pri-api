import styled from 'styled-components';

const CenteredImage = styled.div`
  width: ${(props) => props.width || '160px'};
  height: ${(props) => props.height || '160px'};
  background-image: url("${(props) => props.src}");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default CenteredImage;
