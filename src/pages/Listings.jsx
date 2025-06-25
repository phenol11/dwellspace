import { useState } from "react";
import { Link } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import ListingCard from "../components/ListingCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Listings() {
  const { properties, loading } = useProperty();
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Loading listings...
      </div>
    );
  }

  const filteredProperties = properties.filter((property) => {
    const matchesLocation =
      location === "" ||
      property.address?.city?.toLowerCase().includes(location.toLowerCase());

    const priceValue = property.price?.value || 0;
    const matchesPrice = maxPrice === "" || priceValue <= parseInt(maxPrice);

    return matchesLocation && matchesPrice;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Listings</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Filter by city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded p-2 flex-1"
        />
        <input
          type="number"
          placeholder="Max price ($)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-gray-300 rounded p-2 flex-1"
        />
      </div>

      {/* Listings grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <motion.div
              key={property.zpid}
              className="bg-white shadow rounded"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Link to={`/listing/${property.zpid}`}>
                <ListingCard
                  property={{
                    id: property.zpid,
                    title: property.address?.streetAddress || "No Title",
                    location: property.address?.city || "No City",
                    price: property.price?.value
                      ? `$${property.price.value.toLocaleString()}`
                      : "N/A",
                    image:
                      property.media?.allPropertyPhotos?.highResolution?.[0] ||
                      "https://via.placeholder.com/400x300",
                  }}
                />
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No listings match your search.
          </p>
        )}
      </motion.div>
    </div>
  );
}
