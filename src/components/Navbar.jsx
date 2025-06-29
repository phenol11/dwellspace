import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/Dwellspace.png"
            alt="DwellSpace Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden sm:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-amber-400 transition">
            Home
          </Link>
          <Link to="/listings" className="hover:text-amber-400 transition">
            Listings
          </Link>
          <Link to="/contact" className="hover:text-amber-400 transition">
            Contact
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden px-4 pb-4 space-y-2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
          >
            {["/", "/listings", "/contact"].map((path, idx) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link
                  to={path}
                  className="block hover:text-amber-400 pb-1"
                  onClick={() => setIsOpen(false)}
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
