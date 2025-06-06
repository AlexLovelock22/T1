/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        'fluid-base': 'clamp(0.7rem, 0.85vw, 1.2rem)',  
        'fluid-md': 'clamp(0.75rem, 1vw, 1.4rem)', 
        'fluid-lg':   'clamp(0.8rem, 1vw, 1.9rem)',     
        'fluid-xl':   'clamp(1rem, 1.75vw, 2.5rem)',    
      },
      width: {
        'icon-fluid': 'clamp(1.5rem, 2vw, 2.25rem)', 
      },
      height: {
        'icon-fluid': 'clamp(1.5rem, 2vw, 2.25rem)',
      },
      screens: {
        'max-1366': { max: '1570px' }, // matches your CSS logic
      },
    }
    
  },
  plugins: [],
}
