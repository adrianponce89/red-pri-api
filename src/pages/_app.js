import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Navigation from '../components/Navigation';
import SignInModal from '../components/Modals/SignInModal';
import Background from '../components/Background';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import store from '../redux/store';

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
    mainText: '#5d5d5d',
    lightGrey: '#f4f4f4',
  },
  fonts: {
    rounded: '"M PLUS Rounded", Arial, Helvetica, sans-serif',
  },
};

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStep: null,
    };
    this.setModalStep = this.setModalStep.bind(this);
  }

  setModalStep(modalStep) {
    this.setState({ modalStep });
  }

  render() {
    const { modalStep } = this.state;
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navigation
            onShowSignUp={() => this.setModalStep('SelectSignUp')}
            onShowSignIn={() => this.setModalStep('SelectSignIn')}
          />
          <SignInModal
            initialStep={modalStep}
            show={modalStep !== null}
            onClose={() => this.setModalStep(null)}
          />

          <div
            style={{
              position: 'relative',
              paddingTop: '80px',
              width: '100%',
            }}
          >
            <Background />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
