import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const CenteredImage = styled.div`
  width: 390px;
  height: 200px;
  background-image: url("${(props) => props.src}");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 576px) {
    width: 100%;
    padding-bottom: 75%;
  }
`;

const TitleTxt = styled.h3`
  font-weight: bold;
  color: #ff812e;
`;

const ConDiv = styled.div`
  border: 5px solid #858585;
  background-color: #cccccc;
  width: 400px;
`;

const ClampedContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: horizontal;
  cursor: pointer;
`;

const Course = (props) => {
  return (
    <ConDiv>
      <Link href={`/courses/${props._id}`}>
        <div>
          <a>
            <CenteredImage src={props.img} />
          </a>
          <div style={{ zIndex: 1, padding: '1em' }}>
            <TitleTxt>
              <a>{props.TitleTxt}</a>
            </TitleTxt>
            <ClampedContent>{props.detail}</ClampedContent>
          </div>
        </div>
      </Link>
    </ConDiv>
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
