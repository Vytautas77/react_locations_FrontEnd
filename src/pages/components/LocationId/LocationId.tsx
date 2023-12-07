import React from "react";
import styles from "./locationId.module.css";

type locationType = {
  title: string;
  latitude: string;
  longitude: string;
  location_photo_url: string;
  description: string;
  location_id: string;
};

type LocationIdProps = {
  location: locationType | null;
};

const LocationId: React.FC<LocationIdProps> = ({ location }) => {
  return (
    location && (
      <div className={styles.wrapper}>
        <img
          src={location.location_photo_url}
          className={styles.photo}
          alt=""
        />
        <div>
          <h1>{location.title}</h1>
          <span>{location.latitude}</span>
          <span>{location.longitude}</span>
          <p>{location.description}</p>
        </div>
      </div>
    )
  );
};

export default LocationId;
