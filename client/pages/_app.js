import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';

const theme = {
  colors: {
    mainGreen: '#54a9aa',
    lightGreen: '#9bcfcd',
    mainOrange: '#fb9a00',
    lightOrange: '#fcae15',
    mainRed: '#f9425f',
    lightRed: '#fa91a4',
    mainViolet: '#d7c2d5',
    mainText: '#5d5d5d'
  },
  fonts: {
    rounded: '"M PLUS Rounded", Arial, Helvetica, sans-serif'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link
              rel="preload"
              href="/fonts/MPLUSRounded1c-Bold.ttf"
              as="font"
              crossOrigin=""
            />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
