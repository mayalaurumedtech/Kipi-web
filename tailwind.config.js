/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '2px 2px 0px 0px rgba(0, 15, 91, 1)',
        'custom-shadow-green': '3px 3px 0px 0px rgba(67, 147, 104, 1)',
        'custom-shadow-yellow': '3px 3px 0px 0px rgba(218, 141, 25, 1)',
      },
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
