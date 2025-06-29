import { motion } from "framer-motion";
import { useProperty } from "../context/PropertyContext";
import ListingCard from "./ListingCard";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function FeaturedListings() {
  const { properties, loading } = useProperty();

  const featured = properties.slice(0, 15);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Featured Listings</h2>

      {loading ? (
        <p className="text-gray-500 text-center">
          Loading featured listings...
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featured.map((property) => (
            <motion.div key={property.zpid} layout>
              <Link to={`/listing/${property.zpid}`}>
                <ListingCard
                  property={{
                    id: property.zpid,
                    title: property.address?.streetAddress || "No Title",
                    location: property.address?.city || "No City",
                    price: property.price?.value
                      ? `$${property.price.value.toLocaleString()}`
                      : property.hdpView?.price
                      ? `$${property.hdpView.price.toLocaleString()}`
                      : "Price Not Listed",
                    image:
                      property.media?.allPropertyPhotos?.highResolution?.[0] ||
                      "https://via.placeholder.com/400x300",
                  }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
