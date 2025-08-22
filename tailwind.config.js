/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('./images/aurora-capa.jpg')"
      },
      fontFamily: {
        logo: ['Pacifico', 'cursive'],
        body: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

