"use client"

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactSection() {

  const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    contact: "",
    guestCount: "",
    message: "",
  }

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
    setFormData(INITIAL_FORM_STATE)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload when submitting

    const res = await fetch("/api/guest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json()

    if (!result.success) {
      alert(result.message)
      // toast.error(result.message)
    } else {
      alert(result.message)
      // toast.success(result.message)
      resetForm()
    }
  };

  return (
    <div id="contact" className="isolate bg-[url('/eventflow-hero-bg.jpg')] bg-cover px-6 py-24 sm:py-32 lg:px-8">
      <div className="bg-white px-6 py-16 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-black sm:text-5xl">
            RSVP NOW
          </h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>

        {/* RSVP Form */}
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
    </div>

  );
}
