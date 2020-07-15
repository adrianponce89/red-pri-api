import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Navigation from '../components/Navigation';
import SignInModal from '../components/Modals/SignInModal';
import Background from '../components/Background';

const theme = {
  colors: {
    mainGreen: '#52aaab',
    lightGreen: '#9bcfcd',
    mainOrange: '#ff9a00',
    lightOrange: '#ffae16',
    mainRed: '#f9425e',
    lightRed: '#ff91a4',
    darkRed: '#D9230F',
    mainViolet: '#d8c3d6',
    mainText: '#5d5d5d'
  },
  fonts: {
    rounded: '"M PLUS Rounded", Arial, Helvetica, sans-serif'
  }
}

const MyApp = (props) => {
  const [modalStep, setModalStep] = useState(null);
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation
        onShowSignUp={() => setModalStep('SelectSignUp')}
        onShowSignIn={() => setModalStep('SelectSignIn')}
      />
      <SignInModal
        initialStep={modalStep}
        show={modalStep !== null}
        onClose={() => setModalStep(null)}
      />
      
      <div style={{ position: 'relative', paddingTop: '80px' }}>
        <Background />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
};

export default MyApp;
