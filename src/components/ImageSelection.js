import styled from 'styled-components';
import CenteredImage from '../components/CenteredImage';
import { isImageURL } from '../utils/index';

const HoverMessage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(128, 128, 128, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: fill 0.5s;
  color: white;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const ImageSelectorContainer = styled.div`
  width: 160px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

const ImageSelection = ({
  src,
  defaultImage,
  onChange,
  className,
  style,
}) => {
  let fileInput;

  return (
    <ImageSelectorContainer className={className} style={style}>
      <CenteredImage src={src} defaultImage={defaultImage} />
      <input
        style={{ display: 'none' }}
        type="file"
        onChange={onChange}
        ref={(ref) => (fileInput = ref)}
      />
      <HoverMessage onClick={() => fileInput.click()}>
        Seleccionar Imagen
      </HoverMessage>
    </ImageSelectorContainer>
  );
};

export default ImageSelection;
