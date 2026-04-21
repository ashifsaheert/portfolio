/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0f172a',
        darkCard: '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(6, 182, 212, 0.5)',
        'glow-purple': '0 0 15px rgba(168, 85, 247, 0.5)',
      }
    },
  },
  plugins: [],
}
