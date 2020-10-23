import React, {Fragment, useState, useEffect} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState({});

  const { REACT_GOOGLE_API_KEY } = process.env;

  useEffect(() => {
    setCurrentLocation();
  }, []);
  async function setCurrentLocation() {
    await navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      loadCoffeShops();
      }, function(error) {
        alert('Habilite a localização para utilizar o aplicativo!');
    });
  }

  async function loadCoffeeShops() {
    const response = await EstablishmentsService.index(latitude, longitude);
    setLocations(response.data.results);
  }

  return (
    <Fragment>  ​     	
        <LoadScript googleMapsApiKey={REACT_GOOGLE_API_KEY}>
          <GoogleMap mapContainerStyle={{height: "100vh", width: "100%"}}
            zoom={15}
            center={{lat: -25.447306, lng: -49.269027}}>
          </GoogleMap>
        </LoadScript>
    </Fragment>
  );
}
export default App;
