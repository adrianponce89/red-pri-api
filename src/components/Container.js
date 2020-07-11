import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import SignInModal from './Modals/SignInModal';

const Container = (props) => {
  const [modalStep, setModalStep] = useState(null);

  return (
    <div className={props.className}>
      <Navigation
        onShowSignUp={() => setModalStep('SelectSignUp')}
        onShowSignIn={() => setModalStep('SelectSignIn')}
      />
      <SignInModal
        initialStep={modalStep}
        show={modalStep !== null}
        onClose={() => setModalStep(null)}
      />
      {props.children}
    </div>
  )
};
  
export default styled(Container)`
  padding-top: 80px;
`;
