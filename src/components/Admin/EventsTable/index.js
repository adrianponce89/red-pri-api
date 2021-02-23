import React, { useState } from 'react';
import Roster from '../../Roster';
import EventRow from './EventRow';

const EventsTable = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState([]);
  const addSelectedEvent = (events) => {
    const index = selectedEvent.indexOf(events._id);
    if (index < 0) {
      setSelectedEvent([...selectedEvent, events._id]);
    } else {
      setSelectedEvent(
        selectedEvent
          .slice(0, index)
          .concat(selectedEvent.slice(index + 1)),
      );
    }
  };
  return (
    <Roster
      titlesHead={[
        'Selección',
        '#',
        'Title',
        'Content',
        'Publish',
        'Acciones',
      ]}
    >
      {events.map((event) => (
        <EventRow
          key={event._id}
          event={event}
          onSelectEvent={() => addSelectedEvent(event)}
          checked={() => selectedEvent.indexOf(event._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default EventsTable;
