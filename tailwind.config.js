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
        'banner-img':"url('/static/imgs/banner.jpg')"
      },
      boxShadow: {
        'custom-light': '0 3px 5px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'white-20':'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'sans': ['Noto Sans TC', 'sans-serif'],
      },
      spacing: {
        'calc-card': 'calc(50% - 20px)',
      },
      aspectRatio: {
        '8/3': '8 / 3',
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
          secondary: "#449dd1",
          neutral: "#000000",
          error:"#bb342f",
          warning:"#ffe347",
        },
      },
    ],
  },
};
