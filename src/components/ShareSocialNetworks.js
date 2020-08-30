import styled from 'styled-components';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import FAIcon from './FAIcon';

const ICON_SIZE = '66%';

const ShareContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 1em;
`;

const ShareSocialNetworks = (props) => (
  <ShareContainer className={props.className}>
    <FAIcon
      className="fa fa-share-alt"
      style={{ verticalAlign: 'middle' }}
    />
    <FacebookShareButton url={props.url}>
      <FacebookIcon size={ICON_SIZE} round />
    </FacebookShareButton>
    <TwitterShareButton url={props.url}>
      <TwitterIcon size={ICON_SIZE} round />
    </TwitterShareButton>
    <WhatsappShareButton url={props.url}>
      <WhatsappIcon size={ICON_SIZE} round />
    </WhatsappShareButton>
  </ShareContainer>
);

export default styled(ShareSocialNetworks)`
  overflow: hidden;
  p {
    margin: 0;
  }
`;
