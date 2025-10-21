import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from 'framer-motion';

import HeroImage from "../assets/pic.1.jpg";

export default function Home() {
  const { scrollY } = useScroll();

  // Parallax effect for image, title, and button
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const yText = useTransform(scrollY, [0, 500], [0, 60]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-150 to-dark blue dark:from-gray-900 dark:to-gray-800 transition-colors duration-700">
      {/* 🌌 Animated Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute top-10 left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl animate-float-slow"></span>
        <span className="absolute bottom-20 right-16 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl animate-float-medium"></span>
        <span className="absolute top-1/3 left-1/2 w-72 h-72 bg-cyan-400/10 rounded-full blur-2xl animate-float-fast"></span>
      </div>

      {/* 🖼️ Parallax Hero Image */}
      <motion.img
        src={HeroImage}
        alt="Luxury Furniture Hero"
        style={{ y: yImage, scale: scaleImage }}
        className="absolute w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out"
      />

      {/* 🌓 Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent dark:from-black/60 dark:via-black/30 transition-all duration-800"></div>

      {/* ✨ Hero Content */}
      <motion.div
        style={{ y: yText }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-serif font-bold mb-4 text-white drop-shadow-2xl transition-all duration-500 hover:scale-105 hover:text-blue-300"
        >
          Luxury Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md transition-all duration-400 hover:text-blue-50"
        >
          Exquisite designs to elevate your space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <Link
            to="/products"
            className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:opacity-90 hover:shadow-2xl transition-all duration-500 transform hover:scale-110"
          >
            Explore Collection
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}