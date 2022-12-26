/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': "0 0 16px rgb(235, 235, 235)"
      },
      colors: {
        green: {
          DEFAULT: '#03AC0E',
          200: '#02920c'
        }
      },
      backgroundImage: {
        'hero-login': "url('https://i.ibb.co/D8NN1nY/bg-login.png')",
      }
    },
  },
  plugins: [],
}



