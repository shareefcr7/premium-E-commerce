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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f7f8f2] via-[#e9ecdf] to-[#dfe4d2] dark:from-[#0b0b0b] dark:via-[#141414] dark:to-[#1a1a1a] relative overflow-hidden transition-colors duration-700">
      {/* 🌿 Soft Background Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(190,190,170,0.25),_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(230,230,210,0.2),_transparent_60%)]"></div>

      {/* ✨ Glass Card */}
      <div className="relative bg-gradient-to-br from-white/80 to-[#f5f6f1]/60 dark:from-[#111111]/70 dark:to-[#1e1e1e]/70 backdrop-blur-2xl border border-[#d5d9cc]/60 dark:border-[#2a2a2a]/60 shadow-2xl p-10 rounded-2xl w-full max-w-md animate-fadeIn">
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#22250C] via-[#3a4420] to-[#617b42] dark:from-[#cfdab5] dark:via-[#b4c692] dark:to-[#9cb375] bg-clip-text text-transparent drop-shadow-md">
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
              className="w-full p-3 rounded-lg border border-[#ccc]/60 bg-white/70 dark:bg-[#121212]/60 dark:border-[#333] text-[#22250C] dark:text-[#f2f2f2] placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#9cb375] outline-none transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 rounded-lg border border-[#ccc]/60 bg-white/70 dark:bg-[#121212]/60 dark:border-[#333] text-[#22250C] dark:text-[#f2f2f2] placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#9cb375] outline-none transition-all duration-300"
            />
          </div>

          <div>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full p-3 rounded-lg border border-[#ccc]/60 bg-white/70 dark:bg-[#121212]/60 dark:border-[#333] text-[#22250C] dark:text-[#f2f2f2] focus:ring-2 focus:ring-[#9cb375] outline-none transition-all duration-300"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#22250C] via-[#3c4b2a] to-[#617b42] dark:from-[#9cb375] dark:via-[#b4c692] dark:to-[#e1eed4] text-white dark:text-[#22250C] px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-[#444]/70 dark:text-gray-400 text-center text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#3a4420] dark:text-[#b4c692] font-semibold hover:underline transition"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* 🌫️ Gentle Floating Circles */}
      <span className="absolute top-16 left-24 w-32 h-32 bg-[#cfdab5]/30 dark:bg-[#3a4420]/30 rounded-full blur-3xl animate-float-slow"></span>
      <span className="absolute bottom-32 right-16 w-40 h-40 bg-[#e1eed4]/20 dark:bg-[#9cb375]/20 rounded-full blur-2xl animate-float-medium"></span>
    </div>
  );
}
