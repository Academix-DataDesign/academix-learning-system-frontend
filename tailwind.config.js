/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      cs: "1160px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        "custom-gradient":
          "linear-gradient(90deg, rgb(17, 77, 146) 0%, rgb(73, 148, 200) 100%)",
      },
    },
  },
  plugins: [],
};
