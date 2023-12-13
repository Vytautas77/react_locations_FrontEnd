import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import axios from "axios";
import LocationId from "../components/LocationId/LocationId";
import PageTemplate from "../template/PageTemplate";

type locationType = {
  title: string;
  latitude: string;
  longitude: string;
  location_photo_url: string;
  description: string;
  location_id: string;
};

const Location = () => {
  const [location, setLocation] = useState<locationType | null>(null);

  const router = useRouter();

  const fetchLocation = async (id: string) => {
    try {
      const headers = {
        authorization: cookie.get("log152log"),
      };
      const location = await axios.get(
        `https://location-backend.onrender.com/${id}`,
        { headers }
      );
      setLocation(location.data.location);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };
  useEffect(() => {
    router.query.id && fetchLocation(router.query.id as string);
  }, [router.query.id]);

  return (
    <PageTemplate>
      <LocationId location={location} id={router.query.id as string} />
    </PageTemplate>
  );
};

export default Location;
