import styled from 'styled-components';
import Link from 'next/link';

const CenteredImage = styled.div`
  width: 100%;
  height: 225px;
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleTxt = styled.h3`
  height: 10px;
  font-weight: bold;
  color: #ff812e;
`;

const ContentTitleDetail = styled.div`
  padding: 1em;
`;

const CourseContainer = styled.div`
  border-radius: 10px;
  background-color: #cccccc;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
  margin: 15px 0px 0px 10px;
  width: 30%;
  height: 500px;
  overflow: hidden;
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

const Course = (props) => {
  return (
    <Link href={`/courses/${props._id}`}>
      <CourseContainer>
        <a>
          <CenteredImage src={props.picUrl} />
        </a>
        <ContentTitleDetail>
          <TitleTxt>
            <a>{props.title}</a>
          </TitleTxt>
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
