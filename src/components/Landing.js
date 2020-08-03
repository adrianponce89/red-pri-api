import styled from 'styled-components';
import CardBox from '../components/CardBox';

const PIC_WIDTH = '140px';
const PIC_HEIGHT = '140px';
const TITLE_HEIGHT = '10px';
const TITLE_MARGIN = '10px 10px';
const CLAMPED_CONTENT_MARGIN = '20px 10px 10px 0px';
const CARDLANDING_HEIGHT = '324.75px';

const CenteredImage = styled.div`
  width: ${PIC_WIDTH};
  height: ${PIC_HEIGHT};
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${(props) => props.borderRadius};
`;

const Title = styled.h5`
  height: ${TITLE_HEIGHT};
  margin: ${TITLE_MARGIN};
  font-weight: bold;
  color: #545454;
`;

const ClampedContent = styled.p`
  margin: ${CLAMPED_CONTENT_MARGIN};
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

const CardLanding = styled(CardBox)`
  height: ${CARDLANDING_HEIGHT};
`;

const Landing = (props) => {
  return (
    <CardLanding floatingtop="10px">
      <ComponentLinding>
        <CenteredImage
          src={props.picUrl}
          borderRadius={props.borderRadius}
        />
        <Title>
          <a>{props.title}</a>
        </Title>
        <ClampedContent>
          <a>{props.description}</a>
        </ClampedContent>
      </ComponentLinding>
    </CardLanding>
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
