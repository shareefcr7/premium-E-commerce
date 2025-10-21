// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: { "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        floatSlow: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-20px)" } }
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        "float-slow": "floatSlow 8s ease-in-out infinite"
      }
    }
  },
  plugins: [],
};
