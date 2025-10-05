/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'rgb(var(--background) / <alpha-value>)',
          secondary: 'rgb(var(--background-secondary) / <alpha-value>)',
        },
        foreground: {
          DEFAULT: 'rgb(var(--foreground) / <alpha-value>)',
          secondary: 'rgb(var(--foreground-secondary) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          hover: 'rgb(var(--primary-hover) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
