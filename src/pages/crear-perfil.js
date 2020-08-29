import React, { useState } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import EditProfile from '../components/EditProfile';

const CrearPerfil = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ file, ...data }) => {
    setLoading(true);
    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch(`/api/users`, {
      method: 'POST',
      body: fd,
    });

    if (res.status === 201) {
      const resJson = await res.json();
      Router.push(`/perfil/${resJson.user.username}`);
    } else {
      setLoading(false);
    }
  };

  return (
    <EditProfile
      loading={loading}
      onSubmit={handleSubmit}
      buttonName="Crear"
    />
  );
};

export default CrearPerfil;
