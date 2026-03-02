/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        'primary-gradient':
          "linear-gradient(90deg, rgba(30,58,138,1) 0%, rgba(29,78,216,0.73) 50%, rgba(59,130,246,0.6) 100%)",
      },
    },
  },
  plugins: [],
};
