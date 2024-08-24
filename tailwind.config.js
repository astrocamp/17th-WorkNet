/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/templates/**/*.{html,js}"],
  theme: {
    data: {
      active: 'active~="true"',
      disabled: 'disabled~="true"',
    },
    extend: {},
  },
  plugins: [],
};
