/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff1f6',
          100: '#ffe4ec',
          200: '#fbb8cc',
          300: '#f48caf',
          400: '#e95f93',
          500: '#d7457b'
        },
        gold: '#d0a85d',
        charcoal: '#2b2b31',
        lavender: '#d6c5f0'
      },
      boxShadow: {
        glow: '0 10px 50px rgba(233, 95, 147, 0.2)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
