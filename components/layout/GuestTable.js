"use client";
import { useState, useMemo } from "react";

export default function GuestTable({ guests }) {
  const [guestList, setGuestList] = useState(guests);
  const [search, setSearch] = useState("");

  // Filtered guests based on search
  const filteredGuests = useMemo(() => {
    if (!search) return guestList;
    const lowerSearch = search.toLowerCase();
    return guestList.filter(
      (guest) =>
        guest.name.toLowerCase().includes(lowerSearch) ||
        guest.email.toLowerCase().includes(lowerSearch) ||
        (guest.contact && guest.contact.toLowerCase().includes(lowerSearch))
    );
  }, [search, guestList]);

  const handleEdit = (id) => console.log("Edit", id);

  const handleDelete = async (id) => {
    await fetch(`/api/guest/${id}`, { method: "DELETE" });
    setGuestList((prev) => prev.filter((g) => g.id !== id));
  };

  const handleCheckIn = async (id) => {
    const res = await fetch(`/api/guest/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checkIn: true }),
    });
    const updatedGuest = await res.json();
    setGuestList((prev) => prev.map((g) => (g.id === id ? updatedGuest : g)));
  };

  return (
    <div>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-3 py-2 border rounded text-black"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">#</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 hidden sm:table-cell">Phone</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 hidden md:table-cell">Guest Count</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 hidden md:table-cell">Remarks</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 hidden lg:table-cell">RSVP at</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredGuests.map((guest, index) => (
              <tr
                key={guest.id}
                className={`${
                  guest.checkIn ? "bg-green-100 hover:bg-green-200" : "hover:bg-gray-50"
                }`}
              >
                <td className="px-4 py-2 text-sm text-gray-600">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{guest.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{guest.email}</td>
                <td className="px-4 py-2 text-sm text-gray-600 hidden sm:table-cell">{guest.contact || "-"}</td>
                <td className="px-4 py-2 text-sm text-gray-600 hidden md:table-cell">{guest.guestCount || 0}</td>
                <td className="px-4 py-2 text-sm text-gray-600 hidden md:table-cell">{guest.message || "-"}</td>
                <td className="px-4 py-2 text-sm text-gray-600 hidden lg:table-cell">
                  {guest.createdAt ? new Date(guest.createdAt).toLocaleDateString() : "-"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 space-x-2 space-y-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleEdit(guest.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(guest.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={`px-3 py-1 rounded text-white ${
                      guest.checkIn
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => handleCheckIn(guest.id)}
                    disabled={guest.checkIn}
                  >
                    {guest.checkIn ? "Checked In" : "Check-In"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
