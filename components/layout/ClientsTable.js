"use client";
import { useState, useMemo } from "react";

export default function ClientsTable({ clients }) {
  const [clientList, setClientList] = useState(clients);
  const [search, setSearch] = useState("");

  // Filtered clients based on search
  const filteredClients = useMemo(() => {
    if (!search) return clientList;
    const lowerSearch = search.toLowerCase();
    return clientList.filter(
      (client) =>
        client.name.toLowerCase().includes(lowerSearch) ||
        client.email.toLowerCase().includes(lowerSearch) ||
        (client.contact && client.contact.toLowerCase().includes(lowerSearch))
    );
  }, [search, clientList]);

  const handleEdit = (id) => console.log("Edit", id);

  const handleDelete = async (id) => {
    await fetch(`/api/client/${id}`, { method: "DELETE" });
    setClientList((prev) => prev.filter((g) => g.id !== id));
  };

  const handleprojectAcceptance = async (id) => {
    const res = await fetch(`/api/client/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectAcceptance: true }),
    });
    const updatedClient = await res.json();
    setClientList((prev) => prev.map((g) => (g.id === id ? updatedClient : g)));
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
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 hidden md:table-cell">Remarks</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 hidden lg:table-cell">RSVP at</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredClients.map((client, index) => (
              <tr
                key={client.id}
                className={`${
                  client.projectAcceptance ? "bg-green-100 hover:bg-green-200" : "hover:bg-gray-50"
                }`}
              >
                <td className="px-4 py-2 text-sm text-gray-600">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{client.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{client.email}</td>
                <td className="px-4 py-2 text-sm text-gray-600 hidden sm:table-cell">{client.contact || "-"}</td>
                <td className="px-4 py-2 text-sm text-gray-600 hidden md:table-cell">{client.message || "-"}</td>
                <td className="px-4 py-2 text-sm text-gray-600 hidden lg:table-cell">
                  {client.createdAt ? new Date(client.createdAt).toLocaleDateString() : "-"}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600 space-x-2 space-y-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleEdit(client.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(client.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={`px-3 py-1 rounded text-white ${
                      client.projectAcceptance
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => handleprojectAcceptance(client.id)}
                    disabled={client.projectAcceptance}
                  >
                    {client.projectAcceptance ? "Checked In" : "Check-In"}
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
