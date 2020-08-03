import styled from 'styled-components';

const WIDTH_SM = '576px';
const OUTERSIZE_PROPORTION = '30%';
const OUTERSIZE_MARGIN = '10px 10px';
const PADDING_BOTTOM = '161.8%';

const OuterSize = styled.div`
  width: ${OUTERSIZE_PROPORTION};
  position: relative;
  margin: ${OUTERSIZE_MARGIN};
  background-color: white;
  box-shadow: ${(props) => props.shadow};
  overflow: hidden;
  @media (max-width: ${WIDTH_SM}) {
    width: 100%;
  }
`;

const InnerSize = styled.div`
  padding-bottom: ${PADDING_BOTTOM};
  display: flex;
  justify-content: center;
`;

const FloatingContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => props.floatingtop};
  bottom: 0;
`;

const CardBox = (props) => {
  return (
    <OuterSize {...props}>
      <InnerSize />
      <FloatingContainer floatingtop={props.floatingtop}>
        {props.children}
      </FloatingContainer>
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
