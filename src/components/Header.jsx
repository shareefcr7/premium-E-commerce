import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [mobileMenu, setMobileMenu] = useState(false);

  // 🌓 Sync theme with <html> and localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/cart", label: "Cart" },
    { path: "/login", label: "Login" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl
        bg-gradient-to-b from-[#fbfaf7]/90 via-[#f5f3eb]/90 to-[#f1eee4]/80
        dark:from-[#0b0b0b]/90 light:via-[#121212]/90 dark:to-[#1a1a1a]/80
        border-b border-[#d9d6c5]/50 dark:border-[#222]/50
        shadow-md transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* ✨ Logo */}
        <Link
          to="/"
          className="text-3xl font-serif font-bold tracking-wide
            bg-gradient-to-r from-[#22250C] via-[#4b5b2b] to-[#617b42]
            dark:from-[#b4c692] dark:via-[#9cb375] dark:to-[#6a8f37]
            bg-clip-text text-transparent drop-shadow-sm transition-all duration-500"
        >
          LuxeFurn
        </Link>

        {/* 🧭 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-2 py-1 font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#617b42] dark:text-[#b4c692]"
                    : "text-[#22250C]/80 dark:text-[#f1f1f1]/80 hover:text-[#7c9a55] dark:hover:text-[#9cb375]"
                }`
              }
            >
              {link.label}
              {link.path === "/cart" && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#9cb375] dark:bg-[#6a8f37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          ))}

          {/* 🌞 / 🌙 Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 p-2 rounded-full bg-[#e9e6dc] dark:bg-[#222] hover:bg-[#dcd8c8] dark:hover:bg-[#333] 
              shadow-inner transition-all duration-500"
            title="Toggle Light/Dark"
            aria-label="Toggle Light/Dark Theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* 📱 Mobile Section */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-[#e9e6dc] dark:bg-[#222] hover:bg-[#dcd8c8] dark:hover:bg-[#333] transition-all duration-500"
            aria-label="Toggle Light/Dark"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 rounded-md bg-[#e9e6dc] dark:bg-[#222] hover:bg-[#dcd8c8] dark:hover:bg-[#333] transition-all duration-500"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenu ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* 📋 Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#fbfaf7]/95 dark:bg-[#0b0b0b]/95 backdrop-blur-xl border-t border-[#d9d6c5]/40 dark:border-[#222]/40 transition-all duration-500">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `relative px-2 py-2 font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#617b42] dark:text-[#b4c692]"
                      : "text-[#22250C]/80 dark:text-[#f1f1f1]/80 hover:text-[#7c9a55] dark:hover:text-[#9cb375]"
                  }`
                }
              >
                {link.label}
                {link.path === "/cart" && cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-3 bg-[#9cb375] dark:bg-[#6a8f37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
