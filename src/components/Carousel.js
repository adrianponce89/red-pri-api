import Carousel from 'react-bootstrap/Carousel';
import ImageSelection from '../components/ImageSelection';

const Carousels = ({ Title, Paragraph }) => (
  <Carousel>
    <Carousel.Item>
      <ImageSelection src="/imgs/ph_bebe_1.jpeg" />
      <Carousel.Caption>
        <h3>{Title}</h3>
        <p>{Paragraph}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ImageSelection src="/imgs/ph_bebe_1.jpeg" />
      <Carousel.Caption>
        <h3>{Title}</h3>
        <p>{Paragraph}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <ImageSelection src="/imgs/ph_bebe_1.jpeg" />
      <Carousel.Caption>
        <h3>{Title}</h3>
        <p>{Paragraph}</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Carousels;
