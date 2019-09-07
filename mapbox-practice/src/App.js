import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import './App.css';
import Icon from './airlyticsicon.png';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 32.173114,
    longitude: -95.773993,
    zoom: 10,
    width: '90vw',
    height: '90vh',
  })
  
  const [markers, setMarkers] = useState(
    [
      {
        latitude: 32.073114,
        longitude: -95.773993,
      },
      {
        latitude: 32.273114,
        longitude: -95.33993,
      },
      {
        latitude: 32.373114,
        longitude: -95.873993,
      },
      {
        latitude: 32.0473114,
        longitude: -95.973993,
      }
    ]
  )

  // const [isShowing, setIsShowing] = useState(false)
  // const showPhoto = (e) => {
  //   e.preventDefault();
  //   setIsShowing(!isShowing)
  //   setSelected(markers)

  // }

  return (
    <div className="App">
      <header className="App-header">
      <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken="pk.eyJ1IjoiYXBpYXp6YTIyIiwiYSI6ImNqem9rdDN6ZDBnMG8zY3A0aWg0NnNzd3gifQ.d_ZB_H8D9v2Xb4PYs1rVGQ"
        mapStyle= "mapbox://styles/apiazza22/ck08o54ku1ce41cqvybuld1rj"
        onViewportChange={viewport => { 
          setViewport(viewport);
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}  
            latitude={marker.latitude}
            longitude={marker.longitude}
          >
            <button
            >
              <img src={Icon} style={{width: '15px', height: 'auto'}}/>
            </button>
          </Marker>
          ))}

      </ReactMapGL>
      </header>
    </div>
  );
}

export default App;
