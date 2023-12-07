import React from "react";
import styles from "./locations.module.css";
import Location from "../Location/Location";

type LocationType = {
  _id: string;
  title: string;
  latitude: string;
  longitude: string;
  location_photo_url: string;
  description: string;
  location_id: string;
};

type LocationsType = {
  locations: LocationType[] | null;
};

const Locations: React.FC<LocationsType> = ({ locations }) => {
  return (
    <>
      <h1 className={styles.pageTitle}>Klaipėdos krašto istorinės vietovės</h1>
      <div className={styles.wrapper}>
        {locations &&
          locations.map((location) => (
            <div key={location._id}>
              <Location location={location} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Locations;
