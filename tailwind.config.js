/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '0px', 'max': '768px'},
      'md': {'min': '769px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1500px'},
      'xl': {'min': '1500px', 'max': '2000px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [],
}

