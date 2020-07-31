import styled from 'styled-components';
import CardBox from '../components/CardBox';
import Link from 'next/link';

const HEIGHT = '10px';
const HEIGHT_PORCENT = '50%';
const MARGIN_CLAMPEDCONTENT = '20px 10px 10px 0px';

const CenteredImage = styled.div`
  width: ${CardBox.WIDTH_PORCENT};
  height: ${HEIGHT_PORCENT};
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h3`
  height: ${HEIGHT};
  font-weight: bold;
  color: #ff812e;
`;

const ContentTitleDetail = styled.div`
  padding: 1em;
`;

const ClampedContent = styled.p`
  margin: ${MARGIN_CLAMPEDCONTENT};
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
      <CardBox boxshadow>
        <a>
          <CenteredImage src={props.picUrl} />
        </a>
        <ContentTitleDetail>
          <Title>
            <a>{props.title}</a>
          </Title>
          <ClampedContent>{props.description}</ClampedContent>
        </ContentTitleDetail>
      </CardBox>
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
