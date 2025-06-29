import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listing/:id" element={<PropertyDetails />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
