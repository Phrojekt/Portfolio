/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '300px',

      'md': '480px',

      'lg': '768px',
    },

    extend: {
      fontFamily: {
        sans: 'var(--font-titillium)',
        alt: 'var(--font-inika)',
      },
      colors: {
        'dark-purple': '#0C0016',
        'medium-purple': '#1B0131',
        'footer-purple': '#1A0130',
        'green': '#0FB53E',
        'hover-green': '#0A823E',
        'yellow': '#FACD32',
        'red': '#FF6560' ,
      }, 
      backgroundImage: {
        'custom-gradient': 'radial-gradient(59.67% 59.67% at 50.00% 8.79%, rgba(162, 89, 255, 0.30) 0%, rgba(22, 1, 40, 0.30) 100%), linear-gradient(244deg, rgba(162, 89, 255, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #0B0014',
      }
    },
  },
  plugins: [],
}
