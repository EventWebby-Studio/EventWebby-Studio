"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.message || "Something went wrong")
      return
    }

    setSuccess(true)
  }

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>

      {error && (
        <p className="text-red-500 text-sm mb-3">{error}</p>
      )}

      {success ? (
        <p className="text-green-600">
          Account created. You can now{" "}
          <a href="/login" className="underline">login</a>.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input"
            placeholder="Email"
            type="email"
            required
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="input"
            placeholder="Password"
            type="password"
            required
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
          <button className="btn w-full">Sign up</button>
        </form>
      )}
    </div>
  )
}
