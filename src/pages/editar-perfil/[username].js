import React, { useState, useEffect } from 'react';
import EditProfile from '../../components/EditProfile';
import { contentOnLoad } from '../../components/Loadable';
import { server } from '../../config';

const EditarPerfil = (props) => {
  const [role, setRole] = useState('');
  useEffect(() => {
    if (props.user) {
      setRole(props.user.role);
    }
  }, [props]);

  return (
    <>
      {role === 'author' ? (
        <EditProfile profile={props.user} setProfile={() => {}} />
      ) : (
        <EditProfile profile={props.user} setProfile={() => {}} />
      )}
    </>
  );
};

export async function getServerSideProps({ params }) {
  const resUser = await fetch(
    `${server}/api/users/${params.username}`,
  );
  const user = await resUser.json();
  return {
    props: {
      user,
    },
  };
}

export default contentOnLoad(EditarPerfil);
