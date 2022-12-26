/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#03AC0E',
          200: '#02920c'
        }
      },
      backgroundImage: {
        'hero' : "url('https://i.ibb.co/D8NN1nY/bg-login.png')",
      }
    },
  },
  plugins: [],
}
