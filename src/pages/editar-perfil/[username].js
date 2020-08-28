import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from '../../components/Container';
import ProfesionalForm from '../../components/Profile/ProfesionalForm';
import { contentOnLoad } from '../../components/Loadable';
import { server } from '../../config';

const EditarPerfil = (props) => {
  const [role, setRole] = useState('');
  useEffect(() => {
    if (props.user) {
      setRole(props.user.role);
    }
  }, [props]);

  console.log('props:', props);

  return (
    <Container>
      <Card>
        <Card.Body>
          {role === 'author' ? (
            <ProfesionalForm
              profile={props.user}
              setProfile={props.setProfile}
            />
          ) : (
            <ProfesionalForm
              profile={props.user}
              setProfile={props.setProfile}
            />
          )}
        </Card.Body>
      </Card>
    </Container>
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
