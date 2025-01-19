/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this includes your JavaScript/JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light", 
      "dark", 
      "cupcake", 
      "winter", 
      "emerald", 
      "lofi", 
      "night", 
      "forest",
      "dracula",
      "business",
      "corporate",
      "synthwave",
      "luxury"
    ],
  },
}
