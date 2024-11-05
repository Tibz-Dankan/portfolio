/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // "auto-fit": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fit": "repeat(auto-fit, minmax(min-content, 1fr))",
      },
    },
  },
  plugins: [],
};
