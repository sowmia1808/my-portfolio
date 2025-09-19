"use client";

import { useState, useEffect } from "react";
import StructuredData from "@/components/StructuredData";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [mapUrl, setMapUrl] = useState("");

  // Get current location for Google Maps
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapUrl(
            `https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&output=embed`
          );
        },
        () => {
          // Fallback: Dubai
          setMapUrl(
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115672.006!2d55.1713!3d25.0657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f437aa7c20a9f%3A0xbcb0ef1e!2sDubai!5e0!3m2!1sen!2sae!4v1694230800000!5m2!1sen!2sae"
          );
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto mt-15">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          {["name", "email", "phone", "message"].map((field) => (
            <div key={field} className="relative">
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-2 focus:border-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
                />
              ) : (
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-2 focus:border-blue-500 focus:outline-none text-gray-900 dark:text-gray-100 resize-none"
                />
              )}
              <label className="absolute left-0 -top-3.5 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Right - Google Map */}
        <div className="h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
          {mapUrl ? (
            <iframe
              title="My Location"
              src={mapUrl}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-300">
              Loading map...
            </p>
          )}
        </div>
      </div>

    </section>
  );
}
