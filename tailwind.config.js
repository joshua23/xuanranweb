/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff41',
        },
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)',
        'neon-lg': '0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.4)',
      },
      dropShadow: {
        'neon': [
          '0 0 10px rgba(0, 255, 65, 0.8)',
          '0 0 20px rgba(0, 255, 65, 0.4)',
        ],
      },
    },
  },
  plugins: [],
};
