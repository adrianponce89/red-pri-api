import styled from 'styled-components';
import CardBox from '../components/CardBox';
import Link from 'next/link';

const CLAMPED_CONTENT_MARGIN = '20px 10px 10px 0px';
const PIC_HEIGHT = '50%';
const CARDCOURSE_SHADOW = '2px 2px 4px 0px rgba(0, 0, 0, 0.3)';

const CenteredImage = styled.div`
  width: 100%;
  height: ${PIC_HEIGHT};
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h3`
  font-weight: bold;
  color: #ff812e;
`;

const ContentTitleDetail = styled.div`
  padding: 1em;
`;

const ClampedContent = styled.p`
  margin: ${CLAMPED_CONTENT_MARGIN};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: horizontal;
  cursor: pointer;
`;

const CardCourse = styled(CardBox)`
  box-shadow: ${CARDCOURSE_SHADOW};
`;

const Course = (props) => {
  return (
    <Link href={`/courses/${props._id}`}>
      <CardCourse floatingtop="0px">
        <CenteredImage src={props.picUrl} />
        <ContentTitleDetail>
          <Title>
            <a>{props.title}</a>
          </Title>
          <ClampedContent>
            <a>{props.description}</a>
          </ClampedContent>
        </ContentTitleDetail>
      </CardCourse>
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
