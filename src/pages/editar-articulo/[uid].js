import React, { useState } from 'react';
import Router from 'next/router';
import { contentOnLoad } from '../../components/Loadable';
import EditArticle from '../../components/EditArticle';
import fetch from 'isomorphic-fetch';
import { server } from '../../config';

const EditarArticulo = ({ article }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (params) => {
    setLoading(true);
    const res = await fetch(`/api/articles/${article._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
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
    />
  );
};

export async function getServerSideProps(context) {
  const resArticle = await fetch(
    `${server}/api/articles/${context.params.uid}`,
  );
  const article = await resArticle.json();
  return {
    props: {
      article,
    },
  };
}

export default contentOnLoad(EditarArticulo);
