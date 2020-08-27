import React, { useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
} from '@react-google-maps/api';
import styled from 'styled-components';
import ProfesionalCard from './ProfesionalCard';
import { googleMapsAPIKey, mapOptions } from '../config';

const center = {
  lat: -34.6157437,
  lng: -58.5733832,
};

const ResultMap = ({ className, results }) => {
  const [infoWindow, setInfoWindow] = useState(null);

  const flatResults = results.reduce(
    (acc, val) =>
      acc.concat(val.addressList.map((obj) => ({ ...obj, ...val }))),
    [],
  );

  return (
    <LoadScript googleMapsApiKey={googleMapsAPIKey}>
      <GoogleMap
        mapContainerClassName={className}
        center={center}
        zoom={10}
        options={mapOptions}
      >
        {flatResults.map((result) => (
          <Marker
            position={result.location}
            title={result.fullName}
            onMouseOver={() => setInfoWindow(result)}
          />
        ))}
        {infoWindow ? (
          <InfoWindow
            position={infoWindow.location}
            onCloseClick={() => setInfoWindow(null)}
          >
            <ProfesionalCard key={infoWindow._id} {...infoWindow} />
          </InfoWindow>
        ) : (
          ''
        )}
      </GoogleMap>
    </LoadScript>
  );
};

const StyledMap = styled(ResultMap)`
  width: 100%;
  height: 400px;
`;

export default React.memo(StyledMap);
