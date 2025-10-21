import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // mobile menu state

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/cart", label: "Cart" },
    { path: "/login", label: "Login" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-blue-150 to-dark blue/90 dark:bg-gray-900 shadow-md z-50 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-[#FFF8E7] transition-colors duration-300"
        >
          LuxeFurn
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-2 py-1 font-medium transition-colors duration-300 ${isActive
                  ? "text-[#2a424b] dark:text-[#9dabb6]"
                  : "text-gray-800 dark:text-[#FFF8E7] hover:text-[#326ea7] dark:hover:text-[#FFE5B4]"
                }`
              }
            >
              {link.label}
              {link.path === "/cart" && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          ))}

          {/* Dark/Light Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
            title="Toggle Light/Dark"
            aria-label="Toggle Light/Dark Theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle for mobile */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
            title="Toggle Light/Dark"
            aria-label="Toggle Light/Dark Theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 rounded-md bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenu ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenu && (
        <div className="md:hidden bg-blue-150 dark:bg-gray-900 shadow-lg transition-colors duration-300">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)} // close menu on click
                className={({ isActive }) =>
                  `relative px-2 py-2 font-medium transition-colors duration-300 ${isActive
                    ? "text-[#FFD700] dark:text-[#FFE5B4]"
                    : "text-gray-800 dark:text-[#FFF8E7] hover:text-[#FFD700] dark:hover:text-[#FFE5B4]"
                  }`
                }
              >
                {link.label}
                {link.path === "/cart" && cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
