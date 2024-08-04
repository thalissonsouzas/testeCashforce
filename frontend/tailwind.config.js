/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00AD8C', 
        'dark-blue': '#021B51',
        'custom-purple': '#3d5dfc',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'p14': '14px',
      },
      fontWeight: {
        'medium': '500',
      },
      lineHeight: {
        'tight': '18.23px',
      },
      screens: {
        'custom': '900px',
      },
    },
  },
  plugins: [],
}

