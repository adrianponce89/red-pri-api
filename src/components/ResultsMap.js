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
import {
  getLatLngBounds,
  getCenterAndZoom,
} from '../utils/geocoding';

const ResultMap = ({ className, results }) => {
  const [infoWindow, setInfoWindow] = useState(null);

  const flatResults = results.reduce(
    (acc, val) =>
      acc.concat(val.addressList.map((obj) => ({ ...obj, ...val }))),
    [],
  );

  const bounds = getLatLngBounds(flatResults.map((r) => r.location));
  const { center, zoom } = getCenterAndZoom(bounds);

  return (
    <LoadScript googleMapsApiKey={googleMapsAPIKey}>
      <GoogleMap
        mapContainerClassName={className}
        center={center}
        zoom={zoom}
        options={mapOptions}
      >
        {flatResults.map((result) => (
          <Marker
            position={result.location}
            title={result.fullname}
            onClick={() => setInfoWindow(result)}
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
