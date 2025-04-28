import React, { useState, useEffect } from 'react';

const SendMessage = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    // const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const googleMapsUrl = `https://www.google.com/maps/place/23%C2%B015'18.6%22N+77%C2%B030'43.3%22E/@${latitude},${longitude},17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.255171!4d77.512016?entry=ttu`;

  useEffect(() => {
    // Access geolocation when component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  }, []);

  return (
    <div className=' mt-20'>
      <h1>Geolocation</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}

  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">View Location on Google Maps</a>

    </div>
  );
};

export default SendMessage;
