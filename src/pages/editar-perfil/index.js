import React, { useState, useEffect } from 'react';
import EditProfile from '../../components/EditProfile';
import { contentOnLoad } from '../../components/Loadable';

const EditarPerfil = (props) => {
  const [role, setRole] = useState('');
  useEffect(() => {
    if (props.profile) {
      setRole(props.profile.role);
    }
  }, [props]);

  return (
    <>
      {role === 'author' ? (
        <EditProfile
          profile={props.profile}
          setProfile={props.setProfile}
        />
      ) : (
        <EditProfile
          profile={props.profile}
          setProfile={props.setProfile}
        />
      )}
    </>
  );
};

export default contentOnLoad(EditarPerfil);
