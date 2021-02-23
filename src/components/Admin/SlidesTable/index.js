import React, { useState } from 'react';
import styled from 'styled-components';
import { LoadableButton } from '../../Loadable';
import SlideRow from './SlideRow';
import Router from 'next/router';
import Roster from '../../Roster';

const FloatingButton = styled(LoadableButton)`
  position: absolute;
  right: 0;
  top: -4em;
  padding: 1em;
`;

const SlidesTable = ({ slides }) => {
  const [selectedSlid, setSelectedSlid] = useState([]);
  const addSelectedSlid = (slides) => {
    const index = selectedSlid.indexOf(slides._id);
    if (index < 0) {
      setSelectedSlid([...selectedSlid, slides._id]);
    } else {
      setSelectedSlid(
        selectedSlid
          .slice(0, index)
          .concat(selectedSlid.slice(index + 1)),
      );
    }
  };

  const addAllSeletedSlid = (event) => {
    if (event.target.checked) {
      setSelectedSlid(slides.map(({ _id }) => _id));
    } else {
      setSelectedSlid([]);
    }
  };

  const [loading, setLoading] = useState(false);
  const handleAdd = async (event) => {
    event.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/slides`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: '',
        content: '',
        href: '',
      }),
    });

    if (res.status === 201) {
      Router.reload();
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
    setLoading(false);
  };

  return (
    <Roster
      titlesHead={[
        'Selección',
        '#',
        'Image',
        'Title',
        'Content',
        'Link URL',
        'Acciones',
      ]}
      onSeletedAllUsers={addAllSeletedSlid}
    >
      <FloatingButton
        loading={loading}
        onClick={handleAdd}
        variant="success"
        style={{ position: 'absolute' }}
      >
        Agregar diapositiva
      </FloatingButton>

      {slides.map((slide) => (
        <SlideRow
          key={slide._id}
          slide={slide}
          onSelectSlide={() => addSelectedSlid(slide)}
          checked={selectedSlid.indexOf(slide._id) >= 0}
        />
      ))}
    </Roster>
  );
};

export default SlidesTable;
