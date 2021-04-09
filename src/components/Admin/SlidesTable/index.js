import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LoadableButton } from '../../Loadable';
import SlideRow from './SlideRow';
import Roster from '../../Roster';

const FloatingButton = styled(LoadableButton)`
  position: absolute;
  right: 0;
  top: -4em;
  padding: 1em;
`;

const SlidesTable = () => {
  const [slides, setSlides] = useState([]);
  const [selectedSlid, setSelectedSlid] = useState([]);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = async () => {
    const resSlides = await fetch(`/api/slides`);
    setSlides(await resSlides.json());
  };

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
      updateTable();
      setLoading(false);
    } else {
      const resJson = await res.json();
      alert(resJson.error);
    }
  };

  const handleAllSelectedDelete = (event) => {
    event.preventDefault();
    const msg = `¿Seguro que querés borrar ${selectedSlid.length} portadas?`;
    if (!confirm(msg)) {
      return;
    }

    setLoading(true);
    selectedSlid.forEach(async (_id) => {
      const res = await fetch(`/api/slides/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        console.log('finish');
        updateTable();
        setLoading(false);
        setSelectedSlid([]);
      } else {
        const resJson = await res.json();
        alert(resJson.error);
      }
    });
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
      onSeletedAll={addAllSeletedSlid}
      checked={selectedSlid.length > 0}
    >
      <FloatingButton
        style={{
          position: 'absolute',
          right: '10vw',
          fontWeight: 'bold',
          display: `${
            selectedSlid.length > 0 ? 'inline-block' : 'none'
          }`,
        }}
        variant="success"
        loading={loading}
        onClick={handleAllSelectedDelete}
      >{`Borrar ${selectedSlid.length}`}</FloatingButton>
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
          updateTable={() => updateTable()}
        />
      ))}
    </Roster>
  );
};

export default SlidesTable;
