import React, { useEffect } from 'react';
import styled from 'styled-components';

import {
  GoogleMap as GoogleMaps,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '70%',
};

const center = {
  lat: 59.860096 - 0.00013,
  lng: 17.6305953 - 0.00013,
};

const apiKey = 'AIzaSyCrBQMNSfP5M5PHDHLrdoJJ06e0P61HYUs';

const GoogleMap = () => {
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
        />
      </GoogleMaps>
    </LoadScript>
  );
};

export default React.memo(GoogleMap);
