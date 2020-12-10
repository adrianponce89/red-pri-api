import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import TagManager from 'react-gtm-module';
import GlobalStyle from '../components/GlobalStyle';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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

const tagManagerArgs = {
  id: 'GTM-WXNS5V4',
};

class MyApp extends React.Component {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navigation />
          <SignInModal />
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
          <Footer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
