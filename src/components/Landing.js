import styled from 'styled-components';
import CardBox from '../components/CardBox';

const CenteredImage = styled.div`
  width: 140px;
  height: 140px;
  background-image: url("${(props) => props.src}");
  background-color: #cccc88;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${(props) => props.borderRadius};
`;

const Title = styled.h5`
  height: 10px;
  margin: 10px 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mainText};
`;

const ClampedContent = styled.p`
  margin: 20px 10px 10px 0px;
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
  height: 324.75px;
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
