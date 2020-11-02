import React, { useState } from 'react';
import Router from 'next/router';
import { contentOnLoad } from '../../components/Loadable';
import EditEvent from '../../components/EditEvent';
import fetch from 'isomorphic-fetch';
import { server } from '../../config';

const EditarEvento = ({ event }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ file, ...data }) => {
    setLoading(true);
    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch(`/api/events/${event._id}`, {
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
    <EditEvent
      loading={loading}
      onSubmit={(params) => handleSubmit(params)}
      {...event}
      buttonTitle="Editar"
    />
  );
};

export async function getServerSideProps({ params }) {
  const resEvent = await fetch(`${server}/api/events/${params.uid}`);
  const event = await resEvent.json();
  return {
    props: {
      event,
    },
  };
}

export default contentOnLoad(EditarEvento);
