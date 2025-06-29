// ✅ Existing imports
import { useParams, useNavigate } from "react-router-dom";
import { useProperty } from "../context/PropertyContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, loading } = useProperty();
  const [current, setCurrent] = useState(0);

  const property = properties.find((p) => String(p.zpid) === id);

  if (loading)
    return <div className="p-6 text-center">Loading property...</div>;
  if (!property)
    return <div className="p-6 text-center">Property not found.</div>;

  const {
    address,
    media,
    price,
    bathrooms,
    bedrooms,
    propertyType,
    yearBuilt,
  } = property;

  const images = media?.allPropertyPhotos?.highResolution?.slice(0, 10) || [];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ✅ Handler for payment button click
  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {images.length > 0 && (
        <div className="relative w-full h-80 mb-6 overflow-hidden rounded shadow">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt={`Property Image ${current + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow transition duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow transition duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <h2 className="text-3xl font-bold mt-4">
        {address?.streetAddress || "Untitled Property"}
      </h2>
      <p className="text-gray-600">{address?.city || "Unknown City"}</p>

      <p className="text-gray-900 font-bold text-xl mt-2">
        {price?.value ? `$${price.value.toLocaleString()}` : "Price not listed"}
      </p>

      <div className="mt-4 text-gray-700 leading-relaxed space-y-2">
        <p className="pb-1">
          🛏️ <strong>Bedrooms:</strong> {bedrooms ?? "N/A"}
        </p>
        <p className="pb-1">
          🛁 <strong>Bathrooms:</strong> {bathrooms ?? "N/A"}
        </p>
        <p className="pb-1">
          🏠 <strong>Type:</strong> {propertyType || "N/A"}
        </p>
        <p className="pb-1">
          📅 <strong>Year Built:</strong> {yearBuilt || "N/A"}
        </p>
        <p className="pb-1">
          📍 <strong>Address:</strong>{" "}
          {`${address?.streetAddress || ""}, ${address?.city || ""}`}
        </p>
      </div>

      {/* ✅ Make Payment Button */}
      <button
        onClick={handlePayment}
        className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-200"
      >
        Make Payment
      </button>
    </div>
  );
}
