import React, { FC } from "react";

type Props = {
  latitude: number | null;
  longitude: number | null;
};

const Geolocation: FC<Props> = ({ latitude, longitude }) => (
  <div>
    <div>latitude: {latitude}</div>
    <div> longitude: {longitude}</div>
  </div>
);

export default Geolocation;
