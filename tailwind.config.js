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
        'header-img': "url('/img/header.webp')",
        'intro-img' : "url('/img/introbg.webp')",
        'bw1-img' : "url('/img/bw-1.webp')",
        'index-img' : "url('/img/6.webp')",
        'gift-img' : "url('/img/5.webp')"
      },
    },
  },
  plugins: [],
}
