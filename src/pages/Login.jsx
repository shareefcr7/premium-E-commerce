import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserRole } from "../Utils/userRole";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", role: "customer" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserRole(form.role);
    alert(`Welcome ${form.role.toUpperCase()}!`);
    navigate("/products");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1e40af33,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#2563eb33,_transparent_50%)]" />

      {/* Glass Card */}
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-xl border border-gray-700/60 shadow-2xl p-10 rounded-2xl w-full max-w-md animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          Welcome Back 👋
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900/70 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900/70 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
            />
          </div>

          <div>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900/70 text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-900/50 hover:shadow-blue-700/70 hover:scale-[1.02] transition-transform duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-gray-400 text-center text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 font-semibold hover:text-blue-300 transition"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}