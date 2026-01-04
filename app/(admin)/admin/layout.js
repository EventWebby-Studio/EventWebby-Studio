"use client"

import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react";

export default function AdminLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="font-bold text-xl mb-6">Admin</h2>
        <nav className="space-y-3 flex flex-col">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/cms">Clients</Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: "/" });
            }}
          >
            Logout
          </a>
        </nav>
      </aside>

      {/* Mobile navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white flex items-center justify-between p-4 z-50">
        <h2 className="font-bold text-xl">Admin Dashboard</h2>
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <aside className="md:hidden fixed top-1 6left-0 w-full bg-gray-900 text-white p-6 z-40">
          <nav className="space-y-3 flex flex-col">
            <Link href="/admin" onClick={toggleMenu}>Dashboard</Link>
            <Link href="/admin/cms" onClick={toggleMenu}>Clients</Link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                signOut({ callbackUrl: "/" });
              }}
            >
              Logout
            </a>
          </nav>
        </aside>
      )}

      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  )
}
