import React, { useState, useEffect } from "react";
import axios from "axios";

import Locations from "./components/Locations/Locations";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import PageTemplate from "./template/PageTemplate";

const Index = () => {
  const [locations, setLocations] = useState<Array<any> | null>(null);
  const router = useRouter();

  const fetchLocations = async () => {
    try {
      const headers = {
        authorization: cookie.get("log152log"),
      };
      const response = await axios.get("http://localhost:3001/locations/", {
        headers,
      });
      setLocations(response.data.locations);
    } catch (error) {
      console.error("Error fetching locations:", error);

      if (error.response.status === 401) {
        router.push("/Login");
      }
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div>
      <PageTemplate>
        <Locations locations={locations} />
      </PageTemplate>
    </div>
  );
};

export default Index;
