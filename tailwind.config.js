/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "tomato-2":"var(--tomato-2)",
      "bronze-1": "var(--bronze-1)",
      "tomato-10": "var(--tomato-10)",
      "tomato-12": "var(--tomato-12)",
      "mauve-12": "var(--mauve-12)",
      "mauve-8": "var(--mauve-8)",
    },
  },
  plugins: [],
}




