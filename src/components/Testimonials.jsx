import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Buyer",
    quote:
      "DwellSpace helped me find my dream home quickly and easily. The listings were detailed and the agents were very supportive.",
  },
  {
    name: "James Williams",
    role: "Seller",
    quote:
      "I listed my property on DwellSpace and it was sold within weeks. Great platform with excellent reach and user experience.",
  },
  {
    name: "Aisha Bello",
    role: "Investor",
    quote:
      "As a property investor, DwellSpace provides me with accurate listings and smooth transactions. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#0f172a]">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <p className="text-gray-700 mb-4 italic">“{testimonial.quote}”</p>
              <h3 className="text-lg font-semibold text-[#0f172a]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
