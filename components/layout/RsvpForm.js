"use client";

import { useState } from "react";
export default function RsvpForm() {
  // setup the form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    guestCount: "",
    message: "",
  });

  //setup a event handler for form submission
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload when submitting

    const res = await fetch("/api/guest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res) {
        alert("RSVP submitted successfully!");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">RSVP Form</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded rsvp-input"
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
            className="w-full px-3 py-2 border rounded rsvp-input"
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
            className="w-full px-3 py-2 border rounded rsvp-input"
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
            className="w-full px-3 py-2 border rounded rsvp-input"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded rsvp-input"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit RSVP
        </button>
      </form>
    </div>
  );
}
