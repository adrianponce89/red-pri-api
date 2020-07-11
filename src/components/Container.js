import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import SignInModal from './Modals/SignInModal';
import SignUpModal from './Modals/SignUpModal';

const Container = (props) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className={props.className}>
      <Navigation
        onShowSignUp={() => setShowSignUp(true)}
        onShowSignIn={() => setShowSignIn(true)}
      />
      <SignInModal
        show={showSignIn}
        onClose={() => setShowSignIn(false)}
        onShowSignUp={() => { setShowSignIn(false); setShowSignUp(true); }}
      />
      <SignUpModal
        show={showSignUp}
        onClose={() => setShowSignUp(false)}
        onShowSignIn={() => { setShowSignUp(false); setShowSignIn(true); }}
      />
      {props.children}
    </div>
  )
};
  
export default styled(Container)`
  padding-top: 80px;
`;
