import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import EditProfile from '../../components/EditProfile';
import { contentOnLoad } from '../../components/Loadable';
import { server } from '../../config';

const EditarPerfil = (props) => {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.user) {
      setRole(props.user.role);
    }
  }, [props]);

  const handleSubmit = async ({ file, ...data }) => {
    setLoading(true);
    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch(`/api/users/${props.user._id}`, {
      method: 'PATCH',
      body: fd,
    });

    if (res.status === 200) {
      const resJson = await res.json();
      Router.push(`/administrar`);
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {role === 'author' ? (
        <EditProfile
          loading={loading}
          profile={props.user}
          onSubmit={handleSubmit}
          buttonName="Editar"
        />
      ) : (
        <EditProfile
          loading={loading}
          profile={props.user}
          onSubmit={handleSubmit}
          buttonName="Editar"
        />
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
