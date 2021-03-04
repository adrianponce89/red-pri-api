import React, { useState } from 'react';
import Roster from '../../Roster';
import MessageRow from './MessageRow';

const MessagesTable = ({ messages }) => {
  const [selectedMessage, setSelectedMessage] = useState([]);
  const addselectedMessage = (messages) => {
    const index = selectedMessage.indexOf(messages._id);
    if (index < 0) {
      setSelectedMessage([...selectedMessage, messages._id]);
    } else {
      setSelectedMessage(
        selectedMessage
          .slice(0, index)
          .concat(selectedMessage.slice(index + 1)),
      );
    }
  };
  return (
    <Roster
      titlesHead={[
        'Selección',
        '#',
        'Nombre',
        'Mail',
        'Contenido',
        'Acciones',
      ]}
    >
      {messages.map((message) => (
        <MessageRow
          key={message._id}
          message={message}
          onSelectMessage={() => addselectedMessage(message)}
          checked={() => selectedMessage.indexOf(message._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default MessagesTable;
