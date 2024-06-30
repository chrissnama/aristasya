/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'alice': ['Alice', 'serif'],
        'alex-brush': ['Alex Brush', 'cursive'],
        'playfair-display': ['Playfair Display', 'serif'],
        'karla': ['Karla', 'sans-serif'],
      },
      backgroundImage: {
        'header-img': "url('/img/header.jpg')",
        'intro-img' : "url('/img/introbg.png')",
        'bw1-img' : "url('/img/bw-1.jpg')",
        'index-img' : "url('/img/6.jpg')",
        'gift-img' : "url('/img/5.jpg')"
      },
    },
  },
  plugins: [],
}
