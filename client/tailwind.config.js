/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        side: "#F1F6F9",
        light: "#F5F5F7",
      },
    },
  },
  plugins: [],
};
