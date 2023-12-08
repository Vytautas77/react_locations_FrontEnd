import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./addLocation.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const AddLocation = () => {
  const [title, setTitle] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location_photo_url, setLocation_photo_url] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const onAddLocation = async () => {
    const location = {
      title,
      latitude,
      longitude,
      location_photo_url,
      description,
    };

    const response = await axios.post("http://localhost:3001/locations", {
      ...location,
    });
    console.log(response);
    if (response.status === 200) {
      router.push("/");
    }
  };

  return (
    <>
      <Header />
      <h1 className={styles.h1}> Add location</h1>
      <div className={styles.form}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <input
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="latitude"
        />
        <input
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="longitude"
        />
        <input
          value={location_photo_url}
          onChange={(e) => setLocation_photo_url(e.target.value)}
          placeholder="photo_url"
        />
        <textarea
          style={{ resize: "none" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          cols={50}
          placeholder="description"
        />
        <button className={styles.btn} onClick={onAddLocation}>
          Add location
        </button>
      </div>
      <Footer />;
    </>
  );
};

export default AddLocation;
