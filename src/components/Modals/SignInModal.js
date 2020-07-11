import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import SelectSignInMethod from './components/SelectSignInMethod';
import EmailSignInMethod from './components/EmailSignInMethod';
import SelectSignUpMethod from './components/SelectSignUpMethod';
import EmailSignUpMethod from './components/EmailSignUpMethod';

const SignInModal = (props) => {
  const [step, setStep] = useState(null);

  useEffect(() => setStep(props.initialStep), [props]);

  const renderSteps = () => {
    if (step === 'SelectSignIn')
      return (
        <SelectSignInMethod
          {...props}
          onSelectSignUp={() => setStep('SelectSignUp')}
          onEmailMethod={() => setStep('EmailSignIn')}
        />
      );
    else if (step === 'EmailSignIn')
      return (
        <EmailSignInMethod {...props} onSelectSignIn={() => setStep('SelectSignIn')}/>
      );
    else if (step === 'SelectSignUp')
      return (
        <SelectSignUpMethod
          {...props}
          onSelectSignIn={() => setStep('SelectSignIn')}
          onEmailMethod={() => setStep('EmailSignUp')}
        />
      );
    else if (step === 'EmailSignUp')
      return (
        <EmailSignUpMethod {...props} onSelectSignUp={() => setStep('SelectSignUp')}/>
      );
    else
      return <h1>Ocurrio un error!</h1>
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onClose}
      keyboard={false}
      centered
    >
      {renderSteps()}
    </Modal>
  )
};

  export default SignInModal;
