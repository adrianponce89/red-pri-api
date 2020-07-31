import styled from 'styled-components';

const OuterSize = styled.div`
  height: 324.75px;
  width: 30%;
  position: relative;
  margin: 8px 8px;
  background-color: white;
  overflow: hidden;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const InnerSize = styled.div`
  padding-bottom: 161.8%;
`;

const FloatingContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  bottom: 0;
`;

const CardBox = (prorp) => {
  return (
    <OuterSize>
      <InnerSize />
      <FloatingContainer>{props.children}</FloatingContainer>
    </OuterSize>
  );
};

export default styled(CardBox);
