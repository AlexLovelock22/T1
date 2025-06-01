/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        'fluid-base': 'clamp(0.95rem, 0.7vw, 1.2rem)',   // leave this — body text is fine
        'fluid-lg':   'clamp(1.05rem, 0.8vw, 1.4rem)',   // leave this — stats look good
        'fluid-xl':   'clamp(1.25rem, 1.5vw, 2.5rem)',   // FINAL — heading looks good on 1440p
      },
    }
  },
  plugins: [],
}
