import styled from 'styled-components';
import Link from 'next/link';

const CenteredImage = styled.div`
  width: 100%;
  height: 50%;
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h3`
  height: 10px;
  font-weight: bold;
  color: #ff812e;
`;

const ContentTitleDetail = styled.div`
  padding: 1em;
`;

const ClampedContent = styled.p`
  margin: 20px 10px 10px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: horizontal;
  cursor: pointer;
`;

const OuterSize = styled.div`
  width: 30%;
  position: relative;
  margin: 8px 8px;
  background-color: white;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
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
  top: 0;
  bottom: 0;
`;

const CourseContainer = (props) => (
  <OuterSize>
    <InnerSize />
    <FloatingContainer>{props.children}</FloatingContainer>
  </OuterSize>
);

const Course = (props) => {
  return (
    <Link href={`/courses/${props._id}`}>
      <CourseContainer>
        <a>
          <CenteredImage src={props.picUrl} />
        </a>
        <ContentTitleDetail>
          <Title>
            <a>{props.title}</a>
          </Title>
          <ClampedContent>{props.description}</ClampedContent>
        </ContentTitleDetail>
      </CourseContainer>
    </Link>
  );
};

export default styled(Course)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
