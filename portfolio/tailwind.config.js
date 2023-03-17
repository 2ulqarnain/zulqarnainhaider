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
    extend: {
      fontFamily:{
        kenyan:"var(--font-kenyan)",
        maxwell:"var(--font-maxwell)",
        intro:"var(--font-intro)",
        dosis:"var(--font-dosis)",
      },
    },
  },
  plugins: [],
}