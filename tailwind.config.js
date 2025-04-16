/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      keyframes: {
        gradientCycle: {
          '0%': { backgroundPosition: '0% 50%' },
          '14%': { backgroundPosition: '20% 50%' },
          '28%': { backgroundPosition: '40% 50%' },
          '42%': { backgroundPosition: '60% 50%' },
          '57%': { backgroundPosition: '80% 50%' },
          '71%': { backgroundPosition: '100% 50%' },
          '85%': { backgroundPosition: '80% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        gradientCycle: 'gradientCycle 8s ease infinite',
        fastGradientCycle: 'gradientCycle 3s ease infinite',
      },
      backgroundImage: {
        // Original rainbow gradient
        'rainbow-gradient': `linear-gradient(270deg,
          #2b77e7,  /* Blue */
          #10b981,  /* Emerald */
          #facc15,  /* Yellow */
          #ef4444,  /* Red */
          #a855f7,  /* Purple */
          #6366f1,  /* Indigo */
          #ec4899   /* Pink */
        )`,
        
 
        
        // Deep space/cosmic gradient
        'cosmic-gradient': `linear-gradient(270deg,
          #0f172a,  /* Deep blue */
          #312e81,  /* Indigo */
          #701a75,  /* Deep purple */
          #9d174d,  /* Magenta */
          #0f766e,  /* Deep teal */
          #0c4a6e,  /* Dark blue */
          #0f172a   /* Back to deep blue */
        )`,
      },
      backgroundSize: {
        '400': '400% 400%',
      }
    },
  },
  plugins: [],
}