import React from 'react';

export default function LocationInfo(props) {
  let {location, hours, booth} = props
  return (
    <>
      <h2>location: {location}</h2>
      <h2>hours: {hours}</h2>
      <h2>booth: {booth}</h2>
    </>
  );
}