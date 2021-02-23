import React, { useState } from 'react';
import Roster from '../../Roster';
import InscriptionRow from './InscriptionRow';

const InscriptionTable = ({ inscriptions }) => {
  const [selectedInscipation, setSelectedInscipation] = useState([]);
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

  console.log('selectedInscipation', selectedInscipation);

  return (
    <Roster
      titlesHead={[
        'Seleccion',
        '#',
        'Nombre',
        'Mail',
        '# Evento',
        'Acciones',
      ]}
      onSeletedAllUsers={addAllSeletedInscipation}
    >
      {inscriptions.map((inscription) => (
        <InscriptionRow
          key={inscription._id}
          inscription={inscription}
          onSelectInscription={() =>
            addselectedInscipation(inscription)
          }
          checked={selectedInscipation.indexOf(inscription._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default InscriptionTable;
