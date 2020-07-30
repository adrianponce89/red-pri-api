import styled from 'styled-components';

const CenteredImage = styled.div`
  width: 140px;
  height: 140px;
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

const Title = styled.h5`
  height: 10px;
  margin 8px 8px;
  font-weight: bold;
  color: #545454;
  display: block;
`;

const OuterSize = styled.div`
  width: 30%;
  height: 324.75px;
  position: relative;
  margin: 8px 8px;
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

const LandingContent = (props) => (
  <OuterSize>
    <InnerSize />
    <FloatingContainer>{props.children}</FloatingContainer>
  </OuterSize>
);

const ClampedContent = styled.p`
  margin: 10px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.42);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: horizontal;
  cursor: pointer;
`;

const ComponentLinding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Landing = (props) => {
  return (
    <LandingContent>
      <ComponentLinding>
        <CenteredImage src={props.picUrl} />
        <Title>{props.title}</Title>
        <ClampedContent>{props.description}</ClampedContent>
      </ComponentLinding>
    </LandingContent>
  );
};

export default styled(Landing)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
