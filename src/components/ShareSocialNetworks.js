import react, { useState } from 'react';
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
  position: relative;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  padding-left: 1em;
  &:hover span {
    display: block;
    position: fixed;
    overflow: hidden;
  }
`;

const Span = styled.span`
  display: none;
  background: transparent;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

const Text = styled.p`
  font-size: large;
  font-weight: 600;
`;

const ShareSocialNetworks = (props) => {
  const [left, setLeft] = useState('');
  const [top, setTop] = useState('');

  return (
    <ShareContainer
      className={props.className}
      onMouseMove={(e) => {
        setLeft(e.clientX + 20 + 'px');
        setTop(e.clientY + 20 + 'px');
      }}
    >
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
      <Span left={left} top={top}>
        <Text>Compartir</Text>
      </Span>
    </ShareContainer>
  );
};

export default styled(ShareSocialNetworks)`
  overflow: hidden;
  p {
    margin: 0;
  }
`;
