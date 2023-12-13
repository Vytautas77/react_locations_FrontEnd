/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./locationId.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import Modal from "../modal/Modal";

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
  id: string;
};

const LocationId: React.FC<LocationIdProps> = ({ location, id }) => {
  console.log(id);
  const router = useRouter();

  const [isShowModal, setIsShowModal] = useState(false);
  const onDeleteLocation = async () => {
    const headers = {
      authorization: cookie.get("log152log"),
    };
    const response = await axios.delete(
      `https://location-backend.onrender.com/${id}`,
      {
        headers,
      }
    );
    if (response.status === 200) {
      console.log("delete");

      router.push("/");
    }
  };

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
          <Button
            text="DELETE"
            onClick={() => setIsShowModal(true)}
            isLoading={false}
            className={styles.delBtn}
          />
        </div>
        {isShowModal && (
          <Modal
            onConfirm={onDeleteLocation}
            onCancel={() => setIsShowModal(false)}
          />
        )}
      </div>
    )
  );
};

export default LocationId;
