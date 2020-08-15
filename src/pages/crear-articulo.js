import React, { useState } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import EditArticle from '../components/EditArticle';

const CrearArticulo = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ file, ...data }) => {
    setLoading(true);
    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch('/api/articles', {
      method: 'POST',
      body: fd,
    });

    if (res.status === 201) {
      Router.push('/articulos');
    } else {
      const resJson = await res.json();
      alert(resJson.error);
      setLoading(false);
    }
  };

  return (
    <EditArticle
      loading={loading}
      onSubmit={(params) => handleSubmit(params)}
    />
  );
};

export default CrearArticulo;
