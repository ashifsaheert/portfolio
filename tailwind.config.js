/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0B0B0B', /* Deep black for background */
        darkCard: '#111111', /* Slightly lighter black for cards/elements */
        accent: {
          DEFAULT: '#FF3B3B', /* Strong red */
          muted: '#8B0000',
        },
        secondary: {
          DEFAULT: '#FF6B6B', /* Lighter red */
          muted: '#CD5C5C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(255, 59, 59, 0.1)',
        'brutal-dark': '4px 4px 0px 0px rgba(255, 59, 59, 0.2)',
        'brutal-secondary': '4px 4px 0px 0px rgba(255, 107, 107, 0.1)',
      }
    },
  },
  plugins: [],
}
