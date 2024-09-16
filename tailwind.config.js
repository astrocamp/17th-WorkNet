/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./**/templates/**/*.{html,js}"],
  theme: {
    data: {
      active: 'active~="true"',
      disabled: 'disabled~="true"',
    },
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        corporate: {
          primary: "#007bff",
          secondary: "#00336b",
          neutral: "#000000",
        },
      },
    ],
  },
};
