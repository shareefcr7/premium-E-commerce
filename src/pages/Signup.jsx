import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Signup() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signup Successful!\nName: ${form.name}\nEmail: ${form.email}`);
    navigate("/login");
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen relative overflow-hidden transition-all duration-700 ${
        theme === "light"
          ? "bg-gradient-to-br from-[#fafafa] via-[#f2f2f2] to-[#eaeaea]"
          : "bg-gradient-to-br from-[#0b0b0b] via-[#141414] to-[#1a1a1a]"
      }`}
    >
      {/* 🌟 Ambient Background Orbs */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full top-[-150px] left-[-100px] blur-[150px] animate-pulse ${
          theme === "light"
            ? "bg-[#dfe7d1]/40"
            : "bg-[#3a4420]/30"
        }`}
      ></div>
      <div
        className={`absolute w-[500px] h-[500px] rounded-full bottom-[-150px] right-[-100px] blur-[150px] animate-pulse ${
          theme === "light"
            ? "bg-[#e1eed4]/30"
            : "bg-[#9cb375]/25"
        }`}
      ></div>

      {/* 🌈 Top Accent Line */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-[2px] ${
          theme === "light"
            ? "bg-gradient-to-r from-[#22250C] via-[#4a5a2a] to-[#7b9c50]"
            : "bg-gradient-to-r from-[#9cb375] via-[#b4c692] to-[#e1eed4]"
        } opacity-80`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>

      {/* 🌿 Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative z-10 backdrop-blur-2xl p-10 w-full max-w-md rounded-3xl shadow-2xl border transition-all duration-500 ${
          theme === "light"
            ? "bg-gradient-to-br from-white/90 to-[#f9faf5]/80 border-[#dcdcdc]/70"
            : "bg-gradient-to-br from-[#111]/70 to-[#1f1f1f]/70 border-[#2a2a2a]/60"
        }`}
      >
        {/* Title */}
        <h2
          className={`text-4xl font-extrabold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r ${
            theme === "light"
              ? "from-[#22250C] via-[#3a4420] to-[#617b42]"
              : "from-[#cfdab5] via-[#b4c692] to-[#9cb375]"
          }`}
        >
          Create Account
        </h2>
        <p
          className={`text-center mb-8 ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Join{" "}
          <span
            className={`font-semibold ${
              theme === "light" ? "text-[#3a4420]" : "text-[#b4c692]"
            }`}
          >
            LuxeFurn
          </span>{" "}
          — elevate your space with timeless elegance.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <User
              className={`absolute left-3 top-3 ${
                theme === "light"
                  ? "text-[#3a4420]/70"
                  : "text-[#b4c692]/70"
              }`}
              size={20}
            />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full p-3 pl-10 rounded-xl border focus:ring-2 outline-none transition-all duration-300 ${
                theme === "light"
                  ? "border-[#ccc]/60 bg-white/80 text-[#22250C] placeholder-gray-500 focus:ring-[#617b42]"
                  : "border-[#333] bg-[#121212]/60 text-[#f2f2f2] placeholder-gray-400 focus:ring-[#9cb375]"
              }`}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              className={`absolute left-3 top-3 ${
                theme === "light"
                  ? "text-[#3a4420]/70"
                  : "text-[#b4c692]/70"
              }`}
              size={20}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full p-3 pl-10 rounded-xl border focus:ring-2 outline-none transition-all duration-300 ${
                theme === "light"
                  ? "border-[#ccc]/60 bg-white/80 text-[#22250C] placeholder-gray-500 focus:ring-[#617b42]"
                  : "border-[#333] bg-[#121212]/60 text-[#f2f2f2] placeholder-gray-400 focus:ring-[#9cb375]"
              }`}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              className={`absolute left-3 top-3 ${
                theme === "light"
                  ? "text-[#3a4420]/70"
                  : "text-[#b4c692]/70"
              }`}
              size={20}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={`w-full p-3 pl-10 rounded-xl border focus:ring-2 outline-none transition-all duration-300 ${
                theme === "light"
                  ? "border-[#ccc]/60 bg-white/80 text-[#22250C] placeholder-gray-500 focus:ring-[#617b42]"
                  : "border-[#333] bg-[#121212]/60 text-[#f2f2f2] placeholder-gray-400 focus:ring-[#9cb375]"
              }`}
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                theme === "light"
                  ? "0 0 25px rgba(97,123,66,0.4)"
                  : "0 0 25px rgba(156,179,117,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`w-full font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
              theme === "light"
                ? "bg-gradient-to-r from-[#22250C] via-[#3a4420] to-[#617b42] text-white"
                : "bg-gradient-to-r from-[#9cb375] via-[#b4c692] to-[#e1eed4] text-[#22250C]"
            }`}
          >
            Sign Up
          </motion.button>
        </form>

        {/* Redirect */}
        <p
          className={`mt-6 text-center ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className={`font-semibold hover:underline transition ${
              theme === "light"
                ? "text-[#3a4420]"
                : "text-[#b4c692]"
            }`}
          >
            Log In
          </Link>
        </p>
      </motion.div>

      {/* Floating Orbs */}
      <span
        className={`absolute top-16 left-24 w-32 h-32 rounded-full blur-3xl animate-float-slow ${
          theme === "light" ? "bg-[#dfe7d1]/30" : "bg-[#3a4420]/30"
        }`}
      ></span>
      <span
        className={`absolute bottom-32 right-16 w-40 h-40 rounded-full blur-2xl animate-float-medium ${
          theme === "light" ? "bg-[#e1eed4]/25" : "bg-[#9cb375]/20"
        }`}
      ></span>
    </div>
  );
}
