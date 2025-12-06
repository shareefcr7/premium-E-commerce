export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden mt-24 py-20 text-center
      text-[#2c2a1e] dark:text-[#f6f6f6]
      bg-gradient-to-b from-[#fdfcf9] via-[#f7f5ee] to-[#f0ede6]
      dark:from-[#090909] dark:via-[#111111] dark:to-[#1a1a1a]
      transition-all duration-700 ease-in-out"
    >
      {/* 🌿 Floating Circles + Squares */}
      {/* Circles */}
      <span className="absolute top-20 left-10 w-52 h-52 bg-[#f5f2e7]/70 dark:bg-[#272719]/40 rounded-full blur-3xl animate-float-slow opacity-70"></span>
      <span className="absolute bottom-24 right-16 w-72 h-72 bg-[#ece8d6]/60 dark:bg-[#2a2a1a]/40 rounded-full blur-3xl animate-float-medium opacity-50"></span>
      <span className="absolute top-36 right-28 w-44 h-44 bg-[#fffaf0]/80 dark:bg-[#1c1c14]/40 rounded-full blur-2xl animate-float-fast opacity-50"></span>

      {/* Squares (Floating Panels) */}
      <span className="absolute top-12 right-10 w-36 h-36 bg-gradient-to-br from-[#f3f1e7]/70 to-[#e2dcc9]/70 dark:from-[#1e1e1a]/40 dark:to-[#2a2a1a]/40 rounded-3xl rotate-12 blur-xl animate-float-medium opacity-40"></span>
      <span className="absolute bottom-10 left-14 w-40 h-40 bg-gradient-to-tr from-[#f9f7f0]/70 to-[#ece7d6]/70 dark:from-[#23231a]/50 dark:to-[#2d2d1f]/50 rounded-2xl -rotate-6 blur-lg animate-float-slow opacity-50"></span>

      {/* ✨ Glow Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d2c38c]/60 to-transparent dark:via-[#bfa660]/50 opacity-90 animate-pulse-slow"></div>

      {/* 💎 Brand */}
      <div className="relative z-10 mb-10 animate-fadeIn">
        <h2
          className="text-5xl md:text-6xl font-serif font-bold tracking-wide 
          bg-gradient-to-r from-[#3e3b21] via-[#7c6d3a] to-[#bca85f]
          dark:from-[#ebdf9b] dark:via-[#cbb56d] dark:to-[#a89246]
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(220,200,120,0.3)] animate-glow"
        >
          LuxeFurn
        </h2>
        <p className="text-base mt-3 text-[#544e2f]/80 dark:text-[#d6cc9a]/80 italic animate-fadeIn delay-200">
          Crafted with Comfort • Defined by Sophistication
        </p>
      </div>

      {/* 🧭 Navigation */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-10 text-sm md:text-base font-medium 
        text-[#5e5a3a]/80 dark:text-[#d8cd97]/80 mb-12">
        {[ "About", "Contact"].map((link, i) => (
          <a
            key={link}
            href="#"
            className={`hover:text-[#bfa660] dark:hover:text-[#e6d17d] 
              transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 
              opacity-0 animate-slideUp`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* 🌐 Social Icons */}
      <div className="relative z-10 flex justify-center gap-6 text-2xl mb-10">
        {["twitter", "linkedin"].map((icon, i) => (
          <a
            key={icon}
            href="#"
            className={`p-3 rounded-full 
              bg-white/80 backdrop-blur-md 
              dark:bg-[#1c1c1b]/70 
              border border-[#ebe6d4]/60 dark:border-[#2d2c1f]/60 
              shadow-[0_4px_25px_rgba(200,180,130,0.3)] 
              dark:shadow-[0_4px_25px_rgba(0,0,0,0.5)]
              hover:scale-125 hover:shadow-xl hover:brightness-110
              transition-all duration-500 transform opacity-0 animate-bounceIn`}
            style={{ animationDelay: `${i * 200}ms` }}
            title={icon}
          >
            <i className={`fab fa-${icon}`}></i>
          </a>
        ))}
      </div>

      {/* 💫 Premium Line Animation (Circle + Glow Dot Running) */}
      <div className="relative z-10 w-3/4 mx-auto h-[3px] overflow-hidden rounded-full bg-gradient-to-r from-[#f0e6c0] via-[#d2c38c] to-[#f0e6c0] dark:via-[#bfa660]/70 mb-8">
        <span className="absolute top-0 left-0 w-1/3 h-full bg-[#fff9e3]/60 dark:bg-[#cbb56d]/70 animate-run-circle"></span>

        {/* Moving Glowing Dot */}
        <span className="absolute top-[-6px] left-0 w-3 h-3 bg-[#d2c38c] dark:bg-[#c9b25e] rounded-full shadow-[0_0_10px_rgba(210,195,140,0.8)] animate-dot-move"></span>
      </div>

      {/* 📜 Copyright */}
      <p className="relative z-10 text-xs md:text-sm text-[#6a653f]/70 dark:text-[#d6cb94]/70 animate-fadeIn delay-700">
        © {new Date().getFullYear()} LuxeFurn — Timeless Craft & Modern Grace ✨
      </p>
    </footer>
  );
}
