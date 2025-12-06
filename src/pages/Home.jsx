import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "../assets/pic.2.jpg";

export default function Home() {
  const { scrollY } = useScroll();

  // Parallax animation controls
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const yText = useTransform(scrollY, [0, 500], [0, 60]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f7f7f7] to-[#e5e5e5] dark:from-[#000000] dark:via-[#bff9f6] dark:to-[#1a1a1a] transition-colors duration-700">
      {/* 🌫 Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute top-10 left-10 w-40 h-40 bg-gray-200/30 dark:bg-gray-300/30 rounded-full blur-3xl animate-float-slow"></span>
        <span className="absolute bottom-20 right-16 w-56 h-56 bg-gray-300/25 dark:bg-gray-700/25 rounded-full blur-3xl animate-float-medium"></span>
        <span className="absolute top-1/3 left-1/2 w-72 h-72 bg-gray-400/20 dark:bg-gray-300/25 rounded-full blur-2xl animate-float-fast"></span>
      </div>

      {/* 🖼 Parallax Hero Image */}
      <motion.img
        src={HeroImage}
        alt="Luxury Furniture Hero"
        style={{ y: yImage, scale: scaleImage }}
        className="absolute w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out opacity-90"
      />

      {/* 🌗 Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent dark:from-black/70 dark:via-black/40 transition-all duration-800"></div>

      {/* ✨ Hero Content */}
      <motion.div
        style={{ y: yText }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-[#111] via-[#555] to-[#999] dark:from-[#fff] dark:via-[#ccc] dark:to-[#888] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-500 hover:scale-105"
        >
          Luxury Living
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl mb-8 text-[#333]/80 dark:text-gray-300/90 drop-shadow-sm transition-all duration-400"
        >
          Exquisite designs to elevate your space.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <Link
            to="/products"
            className="bg-gradient-to-r from-[#111] to-[#444] dark:from-[#e0e0e0] dark:to-[#a6a6a6] text-white dark:text-black px-8 py-3 rounded-full shadow-lg hover:shadow-2xl hover:opacity-95 transition-all duration-500 transform hover:scale-110"
          >
            Explore Collection
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
