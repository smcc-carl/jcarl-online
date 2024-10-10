/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md,njk,svg}"],
  theme: {
    extend: {
      container:{
        center: true,
      },
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        primary: '#1c1c22',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}