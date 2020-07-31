import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from '../components/Container';
import ProfesionalForm from '../components/Profile/ProfesionalForm';
import { contentOnLoad } from '../components/Loadable';

const EditarPerfil = (props) => {
  const [role, setRole] = useState('');
  useEffect(() => {
    if (props.profile) {
      setRole(props.profile.role);
    }
  }, [props]);

  return (
    <Container>
      <Card>
        <Card.Body>
          {role === 'author' ? (
            <ProfesionalForm
              profile={props.profile}
              setProfile={props.setProfile}
            />
          ) : (
            <ProfesionalForm
              profile={props.profile}
              setProfile={props.setProfile}
            />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default contentOnLoad(EditarPerfil);
