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
        'dark-02': '#474747',
        'dark-03': '#757575',
        'dark-04': '#A3A3A3',
        'bg-color': 'rgba(0,0,0, 1)',
      },
      backgroundColor: {
        'custom-color': 'rgba(126, 144, 254, 0.1)',
      },
    },
  },
  plugins: [],
}

