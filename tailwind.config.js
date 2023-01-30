/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "0.9rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      boxShadow: {
        custom: "0 0 16px rgb(235, 235, 235)",
      },
      colors: {
        green: {
          DEFAULT: "#03AC0E",
          200: "#02920c",
        },
      },
      backgroundImage: {
        "hero-login": "url('https://i.ibb.co/D8NN1nY/bg-login.png')",
      },
    },
  },
  plugins: [],
}
