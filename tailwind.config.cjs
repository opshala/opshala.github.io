/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        logo: "#0044CC",
        primary: "#555555",
        secondary: "#1564FF",
        accent: "#FFA700",
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin'),
  ]
};
