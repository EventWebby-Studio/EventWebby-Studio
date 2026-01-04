"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  
  const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    contact: "",
    guestCount: "",
    message: "",
  };

  // setup the form data state
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  //setup a event handler for form submission
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload when submitting

    const res = await fetch("/api/guest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (!result.success) {
      // alert(result.message);
      toast.error(result.message)
    } else {
      // alert(result.message);
      toast.success(result.message)
      resetForm();
    }
  };

  return (
    <div
      id="contact"
      className=" relative isolate bg-[url('/eventflow-hero-bg.jpg')] bg-cover px-6 py-24 sm:py-32 lg:px-8"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-center text-[#3A2B1F] mb-2">
            RSVP NOW
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Let us know you’re coming!
          </p>
        </div>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="px-10">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CFA24D]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CFA24D]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Contact</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CFA24D]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Number of Guests</label>
            <input
              type="number"
              name="guestCount"
              min={1}
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CFA24D]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-4 p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CFA24D] h-24"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#CFA24D] text-black hover:bg-[#b38e39] text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
}
