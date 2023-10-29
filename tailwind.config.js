/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Manrope',
      secondary: 'Manrope',
      tertiary: 'Manrope',
      cursi: 'Manrope'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./images/site-bg.jpg')",
        about: "url('./images/about.png')",
        services: "url('./images/services.png')",
      },
    },
  },
  plugins: [],
}

