/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns:
      {
        '200/200': '400px 400px',
        
      }
    },
  },
  plugins: [],
};
