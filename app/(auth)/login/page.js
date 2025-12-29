"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      window.location.href = "/admin";
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn w-full">Login</button>
      </form>
      <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
