/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif',]
      },
      backgroundImage: {
        portfolio: "url('/src/assets/portfolio-bg.jpg')",
      },
      animation: {
        'spin-speed': 'spin 5s linear infinite',
        'pulse-border': 'pulse-border 2s infinite',
      },
      keyframes: {
        'pulse-border': {
          '0%, 100%': { borderColor: 'rgba(236, 72, 153, 0.5)' }, // Light Pink
          '50%': { borderColor: 'rgba(219, 39, 119, 1)' }, // Deep Pink
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

