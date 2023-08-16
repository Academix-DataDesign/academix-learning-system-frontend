/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      "cs": "1160px",

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
