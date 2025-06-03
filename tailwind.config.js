/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        'fluid-base': 'clamp(0.7rem, 0.85vw, 1.2rem)',   // ~11.2px min
        'fluid-lg':   'clamp(0.8rem, 1vw, 1.4rem)',      // ~12.8px min
        'fluid-xl':   'clamp(1rem, 1.75vw, 2.5rem)',     // ~16px min
      },
    }
    
  },
  plugins: [],
}
