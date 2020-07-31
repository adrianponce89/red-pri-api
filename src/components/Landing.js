import styled from 'styled-components';
import CardBox from '../components/CardBox';

const WIDTH_PIC = '140px';
const HEIGHT_PIC = '140px';

const CenteredImage = styled.div`
  width: ${(props) => props.width || WIDTH_PIC};
  height: ${(props) => props.height || HEIGHT_PIC};
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${(props) => props.radiuspercent || CardBox.NONE};
`;

const Title = styled.h5`
  height: ${CardBox.MARGIM_TOP};
  margin ${CardBox.MARGIM_TOP} ${CardBox.MARGIM_RIGTH};
  font-weight: bold;
  color: #545454;
`;

const ClampedContent = styled.p`
  margin: ${CardBox.MARGIM_TOP};
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
    <CardBox floatingtop={CardBox.MARGIM_TOP} hightoutersize>
      <ComponentLinding>
        <CenteredImage
          src={props.picUrl}
          radiuspercent={props.radiuspercent}
        />
        <Title>
          <a>{props.title}</a>
        </Title>
        <ClampedContent>
          <a>{props.description}</a>
        </ClampedContent>
      </ComponentLinding>
    </CardBox>
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
