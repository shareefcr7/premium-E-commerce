export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-800 text-white text-center py-12 mt-12 relative overflow-hidden">
      {/* Animated Triangles */}
      <span className="absolute w-24 h-24 bg-blue-950 rotate-45 -top-12 -left-8 opacity-30 animate-spin-slow clip-triangle"></span>
      <span className="absolute w-32 h-32 bg-blue-950 rotate-45 -bottom-16 -right-12 opacity-20 animate-spin-slow-reverse clip-triangle"></span>
      <span className="absolute w-20 h-20 bg-blue-700 rotate-45 -top-8 -right-16 opacity-25 animate-spin-slow clip-triangle"></span>
      <span className="absolute w-28 h-28 bg-blue-900 rotate-45 -bottom-10 -left-20 opacity-20 animate-spin-slow-reverse clip-triangle"></span>

      {/* Additional Animated Circles */}
      <span className="absolute w-16 h-16 bg-blue-400 rounded-full top-20 left-10 opacity-20 animate-float-slow"></span>
      <span className="absolute w-20 h-20 bg-blue-400 rounded-full top-40 right-20 opacity-15 animate-float-medium"></span>
      <span className="absolute w-12 h-12 bg-blue-600 rounded-full bottom-24 left-32 opacity-25 animate-float-fast"></span>
      <span className="absolute w-10 h-10 bg-blue-300 rounded-full bottom-10 right-16 opacity-15 animate-float-slow"></span>

      {/* Logo Image */}
      <div className="mb-6 relative z-10">
        <h2 className="text-2xl font-bold">LuxeFurn</h2>
      </div>

      {/* Copy */}
      <p className="relative z-10 text-sm">
        © 2027 LuxeFurn. Designed with for Luxury Living.
      </p>
    </footer>
  );
}
