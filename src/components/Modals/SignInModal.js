import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import SelectSignInMethod from './components/SelectSignInMethod';
import EmailSignInMethod from './components/EmailSignInMethod';
import SelectSignUpMethod from './components/SelectSignUpMethod';
import EmailSignUpMethod from './components/EmailSignUpMethod';

import { showModal, hideModal } from '../../redux/slices/modalSlice';

const SignInModal = (props) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideModal());
  };

  const setStep = (step) => {
    dispatch(showModal(step));
  };

  const show = useSelector((state) => state.modal.show);
  const current = useSelector((state) => state.modal.step);

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
        <EmailSignInMethod
          {...props}
          onSetProfile={props.onSetProfile}
          onSelectSignIn={() => setStep('SelectSignIn')}
        />
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
        <EmailSignUpMethod
          {...props}
          onSetProfile={props.onSetProfile}
          onSelectSignUp={() => setStep('SelectSignUp')}
        />
      );
    else return <h1>Ocurrio un Error!</h1>;
  };
  return (
    <Modal show={show} onHide={onClose} keyboard={false} centered>
      {renderSteps()}
    </Modal>
  );
};

export default SignInModal;
