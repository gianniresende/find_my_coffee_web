import React, {Fragment} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
​
const App = () => {

  const { REACT_GOOGLE_API_KEY } = process.env;

  return (
    <Fragment>
  ​     	
        <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}>
          <GoogleMap mapContainerStyle={{height: "100vh", width: "100%"}}
            zoom={15}
            center={{lat: -21.7768606, lng: -41.3109657}}>
          </GoogleMap>
        </LoadScript>
    </Fragment>
  );
}
​
export default App;
