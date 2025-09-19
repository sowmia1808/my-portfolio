"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    projectType: "",
    services: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! Your project inquiry has been sent.");
    setFormData({
      projectType: "",
      services: "",
      budget: "",
      timeline: "",
      name: "",
      email: "",
      website: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg mt-25 mb-10">
      <h6 className="text-xl sm:text-xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        NEED A FULL STACK WEB DEVELOPER? LET'S BUILD SOMETHING.
      </h6>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
        I'm ready to hear about your project. Don’t hesitate to get in touch using the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Project Type */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Select Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          >
            <option value="">Select Project Type</option>
            <option value="Web App">Web App</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Which Services Do You Need?</label>
          <select
            name="services"
            value={formData.services}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          >
            <option value="">Select Services</option>
            <option value="Development">Development</option>
            <option value="Development & Design">Development & Design</option>
            <option value="Development, Design & SEO">Development, Design & SEO</option>
            <option value="SEO">SEO</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Budget */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Select Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          >
            <option value="">Select Budget</option>
            <option value="Below $500">Below $500</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000 - $3000">$1000 - $3000</option>
            <option value="Above $3000">Above $3000</option>
          </select>
        </div>

        {/* Timeline */}
        <div className="flex flex-col  ">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Select Completion Time</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          >
            <option value="">Select Timeline</option>
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="3-4 weeks">3-4 weeks</option>
            <option value="1-2 months">1-2 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        {/* Full Name */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@example.com"
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Website */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Website URL (optional)</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Tell me about your project..."
            className="p-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 resize-none"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Inquiry
          </button>
        </div>
      </form>
    </section>
  );
}
