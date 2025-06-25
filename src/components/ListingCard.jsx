import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ListingCard({ property }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transform hover:scale-[1.015] transition-transform duration-300 border border-gray-200 flex flex-col h-full"
      variants={cardVariants}
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x300";
        }}
      />

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title}
          </h3>
          <p className="text-sm text-gray-500 mb-1">{property.location}</p>
          <p className="text-[#071538] font-bold text-lg">{property.price}</p>
        </div>

        <button className="mt-4 w-full bg-[#071538] text-white py-2 rounded hover:bg-[#0f172a]-700 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
