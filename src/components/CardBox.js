import styled from 'styled-components';

const OuterSize = styled.div`
  width: 30%;
  position: relative;
  margin: 10px 10px;
  background-color: white;
  overflow: hidden;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const InnerSize = styled.div`
  padding-bottom: 161.8%;
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
