/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B2B',
          red: '#E63B2E',
          amber: '#FFAA1D',
          cream: '#FFF8EE',
          brown: '#5C2E00',
          dark: '#1A0A00',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 107, 43, 0.5)',
        'glow-lg': '0 0 80px rgba(255, 107, 43, 0.4)',
        card: '0 8px 40px rgba(92, 46, 0, 0.15)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulse2: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 43, 0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 107, 43, 0.9)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg) scale(1.1)' },
          '50%': { transform: 'rotate(5deg) scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
