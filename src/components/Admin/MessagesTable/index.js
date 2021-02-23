import React, { useState } from 'react';
import Roster from '../../Roster';
import MessageRow from './MessageRow';

const MessagesTable = ({ messages }) => {
  const [selectedMessage, setSelectedMessage] = useState([]);
  const addselectedMessage = (message) => {
    const index = selectedMessage.indexOf(message._id);
    if (index < 0) {
      setSelectedMessage([...selectedMessage, message._id]);
    } else {
      setSelectedMessage(
        selectedMessage
          .slice(0, index)
          .concat(selectedMessage.slice(index + 1)),
      );
    }
  };

  const addAllSeletedMessage = (event) => {
    if (event.target.checked) {
      setSelectedMessage(messages.map(({ _id }) => _id));
    } else {
      setSelectedMessage([]);
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
      onSeletedAllUsers={addAllSeletedMessage}
    >
      {messages.map((message) => (
        <MessageRow
          key={message._id}
          message={message}
          onSelectMessage={() => addselectedMessage(message)}
          checked={selectedMessage.indexOf(message._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default MessagesTable;
