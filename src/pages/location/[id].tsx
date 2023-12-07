import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocationId from "../components/LocationId/LocationId";

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
    const location = await axios.get(`http://localhost:3001/locations/${id}`);
    setLocation(location.data.location);
  };

  useEffect(() => {
    router.query.id && fetchLocation(router.query.id as string);
  }, [router.query.id]);

  return (
    <div>
      <Header />
      <LocationId location={location} />
      <Footer />
    </div>
  );
};

export default Location;
