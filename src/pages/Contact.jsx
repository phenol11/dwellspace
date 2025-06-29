import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>

      {status === "success" && (
        <p className="text-green-600 mb-4 text-center">
          ✅ Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 mb-4 text-center">
          ❌ Something went wrong. Please try again.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded h-32"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded text-white font-semibold shadow transition duration-200 w-full"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
