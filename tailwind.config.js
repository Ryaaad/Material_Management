/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '500px'},
      'sm': {'max': '640px',"min":"501px"},
      'md': {'max': '768px',"min":"641px"},
      'lg': {'max': '1024px',"min":"769px"},
      'xl': {'max': '1280px',"min":"1025px"},
      // => @media (min-width: 640px) { ... }
    },

  },
  plugins: [],
}