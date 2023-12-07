import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Locations from "./components/Locations/Locations";

const Index = () => {
  const [locations, setLocations] = useState<Array<any> | null>(null);

  const fetchLocations = async () => {
    try {
      const response = await axios.get("http://localhost:3001/locations/");
      setLocations(response.data.locations);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div>
      <Header />
      <Locations locations={locations} />
      <Footer />
    </div>
  );
};

export default Index;
