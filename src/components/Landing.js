import styled from 'styled-components';
import CenteredImage from '../components/CenteredImage';
import FAIcon from '../components/FAIcon';
import Link from 'next/link';

const Title = styled.h5`
  height: 10px;
  margin: 10px 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mainText};
`;

const ClampedContent = styled.p`
  margin: 20px 10px 10px 0px;
  color: rgba(0, 0, 0, 0.42);
  font-size: 1.4em;
  text-align: center;
`;

const ComponentLanding = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const CardLanding = styled.div`
  flex: 1;
  padding: 3em;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    cursor: pointer;
  }
  :hover i {
    text-shadow: 0 0 5px black;
  }
`;

const BigIcon = styled(FAIcon)`
  font-size: 140px;
  color: ${({ color, theme }) => color || theme.colors.mainText};
`;

const Landing = (props) => {
  return (
    <CardLanding floatingtop="10px">
      <Link href={props.href}>
        <ComponentLanding>
          {props.picUrl ? (
            <CenteredImage
              src={props.picUrl}
              borderRadius={props.borderRadius}
            />
          ) : (
            ''
          )}
          {props.icon ? (
            <BigIcon className={props.icon} color={props.color} />
          ) : (
            ''
          )}
          <Title>
            <a>{props.title}</a>
          </Title>
          <ClampedContent>
            <a>{props.description}</a>
          </ClampedContent>
        </ComponentLanding>
      </Link>
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
