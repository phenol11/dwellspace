import { createContext, useContext, useEffect, useState } from "react";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const url =
    "https://zillow-com4.p.rapidapi.com/properties/search?location=Houston%2C%20TX&status=forSale&sort=relevance&sortType=asc&priceType=listPrice&listingType=agent";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "zillow-com4.p.rapidapi.com",
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setProperties(data.data || []);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <PropertyContext.Provider value={{ properties, loading }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
