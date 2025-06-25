export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 m-1 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 m-1 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border border-gray-300 m-1 p-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#081a44] text-white py-3 px-4 rounded hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
