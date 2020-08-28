import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import EditProfile from '../../components/EditProfile';
import { contentOnLoad } from '../../components/Loadable';

const EditarPerfil = (props) => {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.profile) {
      setRole(props.profile.role);
    }
  }, [props]);

  const handleSubmit = async ({ file, ...data }) => {
    setLoading(true);
    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch(`/api/users/${props.profile._id}`, {
      method: 'PATCH',
      body: fd,
    });

    if (res.status === 200) {
      const resJson = await res.json();
      props.setProfile(resJson.user);
      Router.push(`/perfil/${resJson.user.username}`);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {role === 'author' ? (
        <EditProfile
          loading={loading}
          profile={props.profile}
          onSubmit={handleSubmit}
        />
      ) : (
        <EditProfile
          loading={loading}
          profile={props.profile}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default contentOnLoad(EditarPerfil);
