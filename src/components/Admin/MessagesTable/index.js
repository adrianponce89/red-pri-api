import React, { useState, useEffect } from 'react';
import Roster from '../../Roster';
import MessageRow from './MessageRow';
import styled from 'styled-components';
import { LoadableButton } from '../../Loadable';

const FloatingButton = styled(LoadableButton)`
  right: 0;
  top: -4em;
  padding: 1em;
`;

const MessagesTable = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = async () => {
    const resMessages = await fetch(`/api/messages`);
    setMessages(await resMessages.json());
  };

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

  const handleAllSelectedDelete = (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar ${selectedMessage.length} portadas?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    selectedMessage.forEach(async (_id) => {
      const res = await fetch(`/api/messages/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        console.log('finish');
        updateTable();
        setLoading(false);
        setSelectedMessage([]);
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
            selectedMessage.length > 0 ? 'inline-block' : 'none'
          }`,
        }}
        variant="success"
        loading={loading}
        onClick={handleAllSelectedDelete}
      >{`Borrar ${selectedMessage.length}`}</FloatingButton>
      <Roster
        titlesHead={[
          'Selección',
          '#',
          'Nombre',
          'Mail',
          'Contenido',
          'Acciones',
        ]}
        onSeletedAll={addAllSeletedMessage}
        checked={selectedMessage.length > 0}
      >
        {messages.map((message) => (
          <MessageRow
            key={message._id}
            message={message}
            onSelectMessage={() => addselectedMessage(message)}
            checked={selectedMessage.indexOf(message._id) >= 0}
            updateTable={() => updateTable()}
          />
        ))}
      </Roster>
    </>
  );
};

export default MessagesTable;
