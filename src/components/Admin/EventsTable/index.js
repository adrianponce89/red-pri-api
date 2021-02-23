import React, { useState } from 'react';
import Roster from '../../Roster';
import EventRow from './EventRow';

const EventsTable = ({ events }) => {
  const [selectedEvents, setSelectedEvents] = useState([]);
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
  console.log('selectedEvents', selectedEvents);
  const addAllSeletedEvents = (event) => {
    if (event.target.checked) {
      setSelectedEvents(events.map(({ _id }) => _id));
    } else {
      setSelectedEvents([]);
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
      onSeletedAll={addAllSeletedEvents}
    >
      {events.map((event) => (
        <EventRow
          key={event._id}
          event={event}
          onSelectEvent={() => addSelectedEvent(event)}
          checked={selectedEvents.indexOf(event._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default EventsTable;
