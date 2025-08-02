/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#0066ff',
        'cyber-black': '#000000',
        'neon-magenta': '#ff00ff',
        'neon-green': '#00ff00',
        'neon-cyan': '#00ffff',
        'dark-blue': '#001133',
        'electric-purple': '#8b00ff',
      },
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 2s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 10px #0066ff' },
          '50%': { boxShadow: '0 0 20px #0066ff, 0 0 30px #0066ff' },
        },
      },
    },
  },
  plugins: [],
} 