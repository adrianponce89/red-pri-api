import React, { useState } from 'react';
import Roster from '../../Roster';
import EventRow from './EventRow';
import styled from 'styled-components';
import { LoadableButton } from '../../Loadable';

const FloatingButton = styled(LoadableButton)`
  right: 0;
  top: -4em;
  padding: 1em;
`;

const EventsTable = ({ events, upDateTable }) => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const addSelectedEvent = (events) => {
    const index = selectedEvents.indexOf(events._id);
    if (index < 0) {
      setSelectedEvents([...selectedEvents, events._id]);
    } else {
      setSelectedEvents(
        selectedEvents
          .slice(0, index)
          .concat(selectedEvents.slice(index + 1)),
      );
    }
  };
  const addAllSeletedEvents = (event) => {
    if (event.target.checked) {
      setSelectedEvents(events.map(({ _id }) => _id));
    } else {
      setSelectedEvents([]);
    }
  };

  const handleAllSelectedDelete = (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar ${selectedEvents.length} eventos ?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    selectedEvents.forEach(async (_id) => {
      const res = await fetch(`/api/events/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        console.log('finish');
        upDateTable();
        setSelectedArticles([]);
        setLoading(false);
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
            selectedEvents.length > 0 ? 'inline-block' : 'none'
          }`,
        }}
        variant="success"
        loading={loading}
        onClick={handleAllSelectedDelete}
      >{`Borrar ${selectedEvents.length}`}</FloatingButton>
      <Roster
        titlesHead={[
          'Selección',
          '#',
          'Title',
          'Content',
          'Publish',
          'Acciones',
        ]}
        onSeletedAll={addAllSeletedEvents}
      >
        {events.map((event) => (
          <EventRow
            key={event._id}
            event={event}
            onSelectEvent={() => addSelectedEvent(event)}
            checked={selectedEvents.indexOf(event._id) >= 0}
            upDateTable={() => upDateTable()}
          />
        ))}
      </Roster>
    </>
  );
};

export default EventsTable;
