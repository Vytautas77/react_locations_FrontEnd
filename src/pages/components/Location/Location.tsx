import React from "react";
import styles from "./location.module.css";
import Link from "next/link";

type LocationType = {
  title: string;
  latitude: string;
  longitude: string;
  location_photo_url: string;
  description: string;
  location_id: string;
  _id: string;
};

type LocationComponentType = {
  location: LocationType;
};

const Location: React.FC<LocationComponentType> = ({ location }) => {
  return (
    <>
      {location && (
        <Link className={styles.link} href={`/location/${location._id}`}>
          console.log(location._id);
          <div className={styles.wrapper}>
            <img
              className={styles.photo}
              src={location.location_photo_url}
              alt={location.title}
            />
            <div>
              <h2>{location.title}</h2>
              <div className={styles.coordinates}>
                <span> {location.latitude}</span>{" "}
                <span>{location.longitude}</span>
              </div>
              <p>{location.description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Location;
