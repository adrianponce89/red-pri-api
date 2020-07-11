import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import SelectSignInMethod from './components/SelectSignInMethod';
import EmailSignInMethod from './components/EmailSignInMethod';
import SelectSignUpMethod from './components/SelectSignUpMethod';
import EmailSignUpMethod from './components/EmailSignUpMethod';

const SignInModal = (props) => {
  const [step, setStep] = useState(null);
  const [last, setLast] = useState(null);
  useEffect(() => { setLast(step); setStep(props.initialStep); }, [props]);

  // Keep last state on sceen on fade-out.
  const current = step || last;

  const renderSteps = () => {
    if (current === 'SelectSignIn')
      return (
        <SelectSignInMethod
          {...props}
          onSelectSignUp={() => setStep('SelectSignUp')}
          onEmailMethod={() => setStep('EmailSignIn')}
        />
      );
    else if (current === 'EmailSignIn')
      return (
        <EmailSignInMethod {...props} onSelectSignIn={() => setStep('SelectSignIn')}/>
      );
    else if (current === 'SelectSignUp')
      return (
        <SelectSignUpMethod
          {...props}
          onSelectSignIn={() => setStep('SelectSignIn')}
          onEmailMethod={() => setStep('EmailSignUp')}
        />
      );
    else if (current === 'EmailSignUp')
      return (
        <EmailSignUpMethod {...props} onSelectSignUp={() => setStep('SelectSignUp')}/>
      );
    else
      return <h1>Ocurrio un Error!</h1>
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
