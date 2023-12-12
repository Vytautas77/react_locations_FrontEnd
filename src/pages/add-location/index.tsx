import React, { useState } from "react";

import styles from "./addLocation.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../components/Button/Button";
import cookie from "js-cookie";
import PageTemplate from "../template/PageTemplate";

const AddLocation = () => {
  // validacija
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location_photo_url, setLocation_photo_url] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const onAddLocation = async () => {
    try {
      const textPattern = /.{5,}/;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const photoPattern = /\bhttps?:\/\/\S+?\.(png|jpe?g|gif|bmp|webp)\b/;
      if (!textPattern.test(title)) {
        return;
      }
      if (!photoPattern.test(location_photo_url)) {
        return console.log("Mistake");
      }
      setIsLoading(true);

      const location = {
        title,
        latitude,
        longitude,
        location_photo_url,
        description,
      };
      const headers = {
        authorization: cookie.get("log152log"),
      };

      const response = await axios.post(
        "http://localhost:3001/locations",
        location,
        { headers }
      );
      setIsLoading(false);

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        router.push("/Login");
      }
      console.error("Error adding location:", error);
    }
  };

  return (
    <PageTemplate>
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
        <Button
          text="Add location"
          isLoading={!isLoading}
          onClick={onAddLocation}
        />
      </div>
    </PageTemplate>
  );
};

export default AddLocation;
