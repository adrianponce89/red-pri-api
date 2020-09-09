import React, { useState } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import { useSelector } from 'react-redux';
import EditProfile from '../../components/EditProfile';
import { contentOnLoad } from '../../components/Loadable';
import { server } from '../../config';

const EditarPerfil = (props) => {
  const [loading, setLoading] = useState(false);
  const profile = useSelector((state) => state.auth.profile);

  const handleSubmit = async ({ file, ...data }) => {
    setLoading(true);
    const fd = new FormData();
    if (file) {
      fd.append('file', file, file.name);
    }
    fd.append('data', JSON.stringify(data));

    const res = await fetch(`/api/users/${profile._id}`, {
      method: 'PATCH',
      body: fd,
    });

    if (res.status === 200) {
      const resJson = await res.json();
      Router.push(`/perfil/${resJson.user.username}`);
    } else {
      setLoading(false);
    }
  };

  return (
    <EditProfile
      loading={loading}
      profile={profile}
      onSubmit={handleSubmit}
      buttonName="Editar"
      specialitiesList={props.specialitiesList}
      themesList={props.themesList}
      atentionTypesList={props.atentionTypesList}
    />
  );
};

export async function getServerSideProps() {
  const resSuggestions = await fetch(`${server}/api/suggestions`);
  const {
    specialitiesList,
    themesList,
    atentionTypesList,
  } = await resSuggestions.json();

  return {
    props: {
      specialitiesList,
      themesList,
      atentionTypesList,
    },
  };
}

export default contentOnLoad(EditarPerfil);
