/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#7E90FE',
        'dark-01': '#1A1919',
        'dark-03': '#757575',
      },
    },
  },
  plugins: [],
}

