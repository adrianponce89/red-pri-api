import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import RegisterModal from './Modals/RegisterModal';

const Container = (props) => {
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div className={props.className}>
      <Navigation onShowRegister={handleShowRegister}/>
      <RegisterModal show={showRegister} onClose={handleCloseRegister}/>
      {props.children}
    </div>
  )
};
  
export default styled(Container)`
  padding-top: 80px;
`;
