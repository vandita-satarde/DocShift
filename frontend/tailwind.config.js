// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // set Roboto as default "sans" font used by Tailwind
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
