import styled from 'styled-components';
import CardBox from '../components/CardBox';
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
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mainText};
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

const CardCourse = styled(CardBox)`
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
`;

const Course = (props) => (
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

export default styled(Course)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
