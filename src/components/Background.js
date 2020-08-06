import { useRouter } from 'next/router';
import styled, { withTheme } from 'styled-components';

const Circle = styled.div`
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  background: ${(props) => props.color};
  border-radius: 50%;
  box-shadow: 1px 1px 4px;
  position: absolute;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: ${(props) => props.size / 2}vmin solid transparent;
  border-left: ${(props) => props.size}vmin solid
    ${(props) => props.color};
  border-bottom: ${(props) => props.size / 2}vmin solid transparent;
  transform: rotate(${(props) => props.rotation}deg);
  position: absolute;
`;

const StripedSquare = styled.div`
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) 12.5%,
    rgba(0, 0, 0, 0) 12.5%,
    rgba(0, 0, 0, 0) 50%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.6) 62.5%,
    rgba(0, 0, 0, 0) 62.5%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 15px 15px;
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  transform: rotate(${(props) => props.rotation}deg);
  position: absolute;
`;

const BorderCircle = styled.div`
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  border-radius: 50%;
  border: 4px solid ${(props) => props.color};
  position: absolute;
`;

const BorderSquare = styled.div`
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  transform: rotate(${(props) => props.rotation}deg);
  border: 4px solid ${(props) => props.color};
  position: absolute;
`;

const DottedCircle = styled.div`
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  border-radius: 50%;
  position: absolute;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.8) 25%,
      transparent 25%
    ),
    radial-gradient(rgba(255, 255, 255, 0.8) 25%, transparent 25%);
  background-position: 0 0, 15px 15px;
  background-size: 30px 30px;
`;

const StripedCircle = styled.div`
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) 12.5%,
    rgba(0, 0, 0, 0) 12.5%,
    rgba(0, 0, 0, 0) 50%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.6) 62.5%,
    rgba(0, 0, 0, 0) 62.5%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 15px 15px;
  width: ${(props) => props.size}vmin;
  height: ${(props) => props.size}vmin;
  border-radius: 50%;
  position: absolute;
`;

const ShapedPattern = styled(
  withTheme(({ className, theme }) => {
    const { lightRed, lightOrange } = theme.colors;
    return (
      <div className={className}>
        <StripedCircle
          size="45"
          color={lightOrange}
          style={{ left: '-10vw', top: '0vh' }}
        />
        <BorderCircle
          size="12"
          color={lightRed}
          style={{ left: '4vw', top: '8vh', borderWidth: '6px' }}
        />
        <Circle
          size="40"
          color={lightRed}
          style={{ left: '-10vw', top: '80vh' }}
        />
        <Triangle
          size="20"
          rotation="45"
          color={lightOrange}
          style={{ left: '0', top: '45vh' }}
        />
        <Triangle
          size="5"
          rotation="25"
          color={lightRed}
          style={{ left: '0', top: '75vh' }}
        />
        <StripedSquare
          size="30"
          rotation="60"
          style={{ left: '20vw', top: '60vh' }}
        />
        <StripedSquare
          size="20"
          rotation="30"
          style={{ right: '20vw', top: '30vh' }}
        />
        <Circle
          size="50"
          color={lightOrange}
          style={{ right: '-15vw', top: '0vh' }}
        />
        <BorderCircle
          size="6"
          color="#FFF"
          style={{ right: '10vw', top: '40vh' }}
        />
        <DottedCircle
          size="60"
          color={lightRed}
          style={{ right: '-10vw', top: '60vh' }}
        />
        <BorderCircle
          size="12"
          color={lightRed}
          style={{ right: '4vw', top: '60vh', borderWidth: '6px' }}
        />
        <Triangle
          size="15"
          rotation="105"
          color={lightRed}
          style={{ right: '30vw', top: '40vh' }}
        />
        <Triangle
          size="5"
          rotation="25"
          color={lightRed}
          style={{ right: '0', top: '75vh' }}
        />
      </div>
    );
  }),
)`
  opacity: 0.2;
  position: relative;
  top: ${(props) => props.pos * 120}vh;
`;

const range = (min, max) => {
  const arr = [];
  for (let i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
};

const BackgroundContainer = styled.div`
  z-index: -1;
  background: ${({ theme, path }) =>
    path === '' ? theme.colors.lightGreen : theme.colors.lightGrey};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 100vh;
  overflow: hidden;
`;

const Background = () => {
  const router = useRouter();
  const path = router.asPath.split('/')[1];
  return (
    <BackgroundContainer path={path}>
      {range(0, 5).map((pos) => (
        <ShapedPattern key={pos} pos={pos} />
      ))}
    </BackgroundContainer>
  );
};

export default Background;
