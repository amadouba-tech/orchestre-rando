/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fonds : blanc franc + une brume froide tres claire (pas de creme)
        canvas: '#FFFFFF',
        mist: '#F1F5F9',
        mistDeep: '#E4EBF2',
        // Texte
        ink: '#16232E',
        slate: '#5A6875',
        // Accent unique : l'or des cuivres, mais vif
        brass: '#E39A1E',
        brassSoft: '#FBEDD3',
        // Bleu du ciel des photos, utilise avec parcimonie
        sky: '#1C7FD6',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        lift: '0 1px 2px rgba(22,35,46,0.04), 0 12px 32px -12px rgba(22,35,46,0.18)',
        card: '0 1px 2px rgba(22,35,46,0.04), 0 6px 20px -10px rgba(22,35,46,0.16)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(.22,.61,.36,1) both',
      },
    },
  },
  plugins: [],
};
