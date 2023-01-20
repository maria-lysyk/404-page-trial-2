/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '11xl': ['14rem', { lineHeight: '1.5' }]
      },
    },
  },
  plugins: [],
}
