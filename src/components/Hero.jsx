import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background image with zoom effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-[url('/assets/image-one.jpg')]"
      ></motion.div>

      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0" /> */}

      <motion.div
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-2 sm:text-5xl drop-shadow-xl">
          Find Your Dream Home
        </h2>
        <p className="text-lg text-gray-200 drop-shadow">
          Browse through thousands of listings tailored to your needs.
        </p>
        <Link to="/listings">
          <button className="mt-4 bg-[#0f172a] hover:bg-[#0f172a]-700 px-6 py-3 rounded text-white text-lg shadow-lg">
            View Listings
          </button>
        </Link>
      </motion.div>

      {/* Scroll-down bounce icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
}
