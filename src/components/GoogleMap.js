import React from 'react';

import {
  GoogleMap as GoogleMaps,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80%',
};

const center = {
  lat: 59.860096 - 0.0002,
  lng: 17.6305953,
};

const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

const GoogleMap = () => {
  const handleMarkerClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    window.open(url, '_blank');
  };
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMaps
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={{ draggable: false, mapId: '330578b92517eac7' }}
      >
        <Marker
          position={center}
          icon={{
            url: '/logo.png',
            scaledSize: { width: 50, height: 50 },
          }}
          onClick={handleMarkerClick}
          style={{ cursor: 'pointer' }}
        />
      </GoogleMaps>
    </LoadScript>
  );
};

export default React.memo(GoogleMap);
