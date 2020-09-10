import styled from 'styled-components';

const CenteredImage = styled.div`
  width: ${(props) => props.width || '160px'};
  height: ${(props) => props.height || '160px'};
  background-image: url("${(props) =>
    props.src ? props.src : props.defaultImage}");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${(props) => props.borderRadius || 0};
`;

export default CenteredImage;
