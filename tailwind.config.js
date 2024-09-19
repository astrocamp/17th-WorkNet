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
      backgroundImage: {
        'logo-backend': "url('/static/imgs/logo_backnend.png')",
      },
      colors: {
        'white-20':'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'sans': ['Noto Sans TC', 'sans-serif'],
      },
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
          primary: "#00336b",
          secondary: "#007bff",
          neutral: "#000000",
        },
      },
    ],
  },
};
