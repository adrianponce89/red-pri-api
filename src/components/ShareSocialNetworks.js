import styled from 'styled-components';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

const ICON_SIZE = '66%';

const ShareContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ShareSocialNetworks = (props) => {
  console.log(props.urlShare);
  return (
    <ShareContainer className={props.className}>
      <FacebookShareButton url={props.urlShare}>
        <FacebookIcon size={ICON_SIZE} round />
      </FacebookShareButton>
      <TwitterShareButton url={props.urlShare}>
        <TwitterIcon size={ICON_SIZE} round />
      </TwitterShareButton>
      <WhatsappShareButton url={props.urlShare}>
        <WhatsappIcon size={ICON_SIZE} round />
      </WhatsappShareButton>
    </ShareContainer>
  );
};

export default styled(ShareSocialNetworks)`
  margin-bottom: 1em;
  overflow: hidden;
  p {
    margin: 0;
  }
`;
