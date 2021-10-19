import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const markerStyles = {
    fontSize: '40px',
    color: '#3D232E'
}

const pStyles = {
    backgroundColor: '#D9BCAD',
    padding: '5px',
}


function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 30.226241,
    longitude: -92.658002,
    zoom: 15,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="50%"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}

    > 
        <Marker latitude={30.226241} longitude={-92.658002} offsetLeft={-20} offsetTop={-10}>
            <div>
                <FontAwesomeIcon icon={faMapMarker} style={markerStyles}/>
                <p style={pStyles}>BOUDREAUX'S BURGERS</p>
            </div>
        </Marker>
    </ReactMapGL>
  );
}

export default Map;