import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import CenteredImage from '../components/CenteredImage';

const CarouselImage = styled(CenteredImage)`
background:  linear-gradient(
      rgba(20, 20, 20, 0.25), 
      rgba(20, 20, 20, 0.55)
    ), url("${(props) => props.src}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  width: 100%;
  min-height: 75vh;
  position: relative;
  overflow: hidden;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  text-shadow: 0px 0px 5px #000;
`;

const Description = styled.p`
  font-weight: bold;
  font-size: 16px;
  text-shadow: 0px 0px 5px #000;
`;

export default ({ slides }) => (
  <Carousel>
    {slides.map((slide) => (
      <Carousel.Item>
        <CarouselImage src={slide.picUrl} />
        <a href={slide.href || ''}>
          <Carousel.Caption>
            <Title>{slide.title}</Title>
            <Description>{slide.content}</Description>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    ))}
  </Carousel>
);
