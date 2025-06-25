import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listing/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}
