// tailwind.config.js
module.exports = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  plugins: [require("@tailwindcss/forms")],
};
