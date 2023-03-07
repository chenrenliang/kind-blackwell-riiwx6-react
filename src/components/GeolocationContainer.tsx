import React, { useState, useEffect } from "react";
import Geolocation from "./Geolocation";

const GeolocationContainer = () => {
  const [latitude, setlatitude] = useState<number | null>(null);
  const [longitude, setlongitude] = useState<number | null>(null);

  const handleSuccess = ({
    coords: { latitude, longitude }
  }: {
    coords: {
      latitude: number;
      longitude: number;
    };
  }) => {
    setlatitude(latitude);
    setlongitude(longitude);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess);
    }
  }, []);

  return <Geolocation latitude={latitude} longitude={longitude} />;
};

export default GeolocationContainer;
