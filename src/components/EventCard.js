import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { timeSince } from '../utils';
import { domainURL } from '../config';
import ShareSocialNetworks from './ShareSocialNetworks';

const CenteredImage = styled.div`
  width: 160px;
  height: 160px;
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

const CardTitle = styled.h4`
  font-weight: bold;
`;

const ClampedContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

const ShareSocialNetwork = styled(ShareSocialNetworks)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 125px;
`;

const EventCard = (props) => {
  return (
    <Card className={`d-flex flex-sm-row ${props.className}`}>
      <Link href={`/eventos/${props.uid}`}>
        <a>
          <CenteredImage src={props.picUrl} />
        </a>
      </Link>
      <div style={{ zIndex: 1, padding: '1em' }}>
        <Link
          href={`/busqueda/temas-${props.category.toLowerCase()}`}
        >
          <Card.Text>
            <a>{props.category.toUpperCase()}</a>
          </Card.Text>
        </Link>
        <Link href={`/eventos/${props.uid}`}>
          <a>
            <CardTitle>{props.title}</CardTitle>
          </a>
        </Link>
        <Link href={`/eventos/${props.uid}`}>
          <ClampedContent>{props.content}</ClampedContent>
        </Link>
        <Card.Text>
          <small className="text-muted">
            Creado hace {timeSince(new Date(props.createdAt))}
          </small>
        </Card.Text>
        <ShareSocialNetwork
          url={`${domainURL}/eventos/${props.uid}`}
        />
      </div>
    </Card>
  );
};

export default styled(EventCard)`
  margin-bottom: 1em;
  padding: 0;
  overflow: hidden;
  a {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
`;
