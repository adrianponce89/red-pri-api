import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';

const theme = {
  colors: {
    mainGreen: '#52aaab',//
    lightGreen: '#9bcfcd',//
    mainOrange: '#ff9a00',//
    lightOrange: '#ffae16',//
    mainRed: '#f9425e',//
    lightRed: '#ff91a4',//
    mainViolet: '#d8c3d6',//
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
