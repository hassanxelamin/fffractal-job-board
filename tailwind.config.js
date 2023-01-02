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
        satoshi: 'Satoshi',
        gilmer: 'Gilmer'
      },
      // keyframes: {
      //   animatedgradient: {
      //     "0%": { 'background-position': '0% 50%' },
      //     "50%": { 'background-position': '100% 50%' },
      //     "100%": { 'background-position': '0% 50%' },
      //   }
      // },
      linearbg: {
        gradient1: { 'background': '-webkit-linear-gradient(45deg, #500ffd, #00ff89)' },
        gradient2: { 'background': '-webkit-linear-gradient(45deg, #680aca, #ff897e)' },
      },
      animate: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 45s linear infinite',
        marquee3: 'marquee3 45s linear infinite',
        marquee4: 'marquee4 45s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  plugins: [],
}
}