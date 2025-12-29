import Link from "next/link"

export default function PublicLayout({ children }) {
  return (
    <>
    {/* navigation bar */}
      <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <Link href="/" className="font-bold text-xl">
            InviteFlow
          </Link>
          <div className="space-x-4">
            <Link href="/blog">Gallery</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>

      <footer className="border-t mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} InviteFlow. All rights reserved.
      </footer>
    </>
  )
}
