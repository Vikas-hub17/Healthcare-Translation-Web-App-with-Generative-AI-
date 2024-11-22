module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Custom primary color
        secondary: '#6C757D', // Custom secondary color
        accent: '#28A745', // Accent for buttons
        danger: '#DC3545', // Danger color for errors
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
