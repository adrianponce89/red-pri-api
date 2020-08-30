import React, { useState } from 'react';
import Router from 'next/router';
import { contentOnLoad } from '../../components/Loadable';
import EditArticle from '../../components/EditArticle';
import fetch from 'isomorphic-fetch';
import { server } from '../../config';

const EditarArticulo = ({ article }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ file, ...data }) => {
    setLoading(true);
    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch(`/api/articles/${article._id}`, {
      method: 'PATCH',
      body: fd,
    });

    if (res.status === 200) {
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
      {...article}
      buttonTitle="Editar"
    />
  );
};

export async function getServerSideProps({ params }) {
  const resArticle = await fetch(
    `${server}/api/articles/${params.uid}`,
  );
  const article = await resArticle.json();
  return {
    props: {
      article,
    },
  };
}

export default contentOnLoad(EditarArticulo);
