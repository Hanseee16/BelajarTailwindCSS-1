/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        biru: "#1d4ed8",
        dark: "#0f172a",
        abu: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
