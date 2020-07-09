import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: Lato, Roboto, Helvetica, Helvetica Neue, Arial, sans-serif;
  }
  @font-face {
    font-family: 'M PLUS Rounded';
    src: url('/fonts/MPLUSRounded1c-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }
`;
