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
    require('daisyui'), // Include DaisyUI here
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
