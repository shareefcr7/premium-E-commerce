import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signup Successful!\nName: ${form.name}\nEmail: ${form.email}`);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-blue-950 relative overflow-hidden">
      {/* Glowing animated background orbs */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-700/30 rounded-full top-[-100px] left-[-100px] blur-[150px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full bottom-[-150px] right-[-100px] blur-[150px] animate-pulse"></div>

      {/* Floating gradient line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-600 opacity-70"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.4)] rounded-3xl p-10 w-full max-w-md"
      >
        {/* Logo or Title */}
        <h2 className="text-4xl font-extrabold mb-3 text-center bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent tracking-wide drop-shadow-xl">
          Create Account
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          Join <span className="font-semibold text-indigo-400">LuxeFurn</span> — Premium Luxury Collections await you!
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-indigo-300" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 pl-10 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-indigo-300" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 pl-10 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-indigo-300" size={20} />
            <input
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 pl-10 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-indigo-600/40 transition-all"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Redirect to Login */}
        <p className="mt-6 text-gray-400 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 font-semibold hover:text-indigo-300 underline transition"
          >
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}