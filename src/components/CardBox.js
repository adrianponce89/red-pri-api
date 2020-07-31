import styled from 'styled-components';

export const WIDTH_SM = '576px';
export const WIDTH_FLUID = '100%';
export const WIDTH_PORCENT = '30%';
export const HEIGHT_OUTERSIZE = '324.75px';
export const HEIGHT_FLUID = '100%';
export const PADDING_BOTTOM = '161.8%';
export const MARGIM_TOP = '10px';
export const MARGIM_RIGTH = '10px';
export const NONE = '0';
export const SHADOW = '2px 2px 4px 0px rgba(0, 0, 0, 0.3)';

const OuterSize = styled.div`
  width: ${WIDTH_PORCENT};
  height: ${(props) =>
    props.hight ? HEIGHT_OUTERSIZE : HEIGHT_FLUID};
  position: relative;
  margin: ${MARGIM_TOP} ${MARGIM_RIGTH};
  background-color: white;
  box-shadow: ${(props) => (props.shadow ? SHADOW : NONE)};
  overflow: hidden;
  @media (max-width: ${WIDTH_SM}) {
    width: ${WIDTH_FLUID};
  }
`;

const InnerSize = styled.div`
  padding-bottom: ${PADDING_BOTTOM};
`;

const FloatingContainer = styled.div`
  position: absolute;
  left: ${NONE};
  right: ${NONE};
  top: ${(props) => props.floatingtop || NONE};
  bottom: ${NONE};
`;

const CardBox = (props) => {
  return (
    <OuterSize shadow={props.boxshadow} hight={props.hightoutersize}>
      <InnerSize />
      <FloatingContainer>{props.children}</FloatingContainer>
    </OuterSize>
  );
};

export default styled(CardBox)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
