import React, { useState, useEffect } from 'react';
import Roster from '../../Roster';
import { LoadableButton } from '../../Loadable';
import styled from 'styled-components';
import InscriptionRow from './InscriptionRow';

const FloatingButton = styled(LoadableButton)`
  right: 0;
  top: -4em;
  padding: 1em;
`;

const InscriptionTable = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [selectedInscipation, setSelectedInscipation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = async () => {
    const resInscriptions = await fetch(`/api/inscriptions`);
    setInscriptions(await resInscriptions.json());
  };

  const addselectedInscipation = (inscriptions) => {
    const index = selectedInscipation.indexOf(inscriptions._id);
    if (index < 0) {
      setSelectedInscipation([
        ...selectedInscipation,
        inscriptions._id,
      ]);
    } else {
      setSelectedInscipation(
        selectedInscipation
          .slice(0, index)
          .concat(selectedInscipation.slice(index + 1)),
      );
    }
  };

  const addAllSeletedInscipation = (event) => {
    if (event.target.checked) {
      setSelectedInscipation(inscriptions.map(({ _id }) => _id));
    } else {
      setSelectedInscipation([]);
    }
  };

  const handleAllSelectedDelete = (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar ${selectedInscipation.length} inscripciones?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    selectedInscipation.forEach(async (_id) => {
      const res = await fetch(`/api/inscriptions/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200) {
        updateTable();
        console.log('finish');
        setLoading(false);
        setSelectedInscipation([]);
      } else {
        const resJson = await res.json();
        alert(resJson.error);
      }
    });
  };

  return (
    <>
      <FloatingButton
        style={{
          position: 'absolute',
          right: '10vw',
          fontWeight: 'bold',
          display: `${
            selectedInscipation.length > 0 ? 'inline-block' : 'none'
          }`,
        }}
        variant="success"
        loading={loading}
        onClick={handleAllSelectedDelete}
      >{`Borrar ${selectedInscipation.length}`}</FloatingButton>
      <Roster
        titlesHead={[
          'Seleccion',
          '#',
          'Nombre',
          'Mail',
          '# Evento',
          'Acciones',
        ]}
        onSeletedAll={addAllSeletedInscipation}
        checked={selectedInscipation.length > 0}
      >
        {inscriptions.map((inscription) => (
          <InscriptionRow
            key={inscription._id}
            inscription={inscription}
            onSelectInscription={() =>
              addselectedInscipation(inscription)
            }
            checked={
              selectedInscipation.indexOf(inscription._id) >= 0
            }
            updateTable={() => updateTable()}
          />
        ))}
      </Roster>
    </>
  );
};

export default InscriptionTable;
