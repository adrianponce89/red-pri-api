import React, { useState } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import EditArticle from '../components/EditArticle';

const CrearArticulo = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (params) => {
    setLoading(true);
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
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
