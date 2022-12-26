/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: 'Grotesk',
        satoshi: 'Satoshi'
      },
      keyframes: {
        animatedgradient: {
          "0%": { 'background-position': '0% 50%' },
          "50%": { 'background-position': '100% 50%' },
          "100%": { 'background-position': '0% 50%' },
        }
      },
      linearbg: {
        gradient1: { 'background': '-webkit-linear-gradient(45deg, #500ffd, #00ff89)' },
        gradient2: { 'background': '-webkit-linear-gradient(45deg, #680aca, #ff897e)' },
      },
      animate: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
    },
  plugins: [],
}
}