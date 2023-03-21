/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        sm: "5px",
      },
      backgroundColor: {
        clay: "rgba(255, 255, 255, 1)",
        primary: "#3f51b5", // Color primario para la aplicación de odontología
        secondary: "#009688", // Color secundario para la aplicación de odontología
      },
      boxShadow: {
        clay: "35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -3px -3px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
      },

      borderRadius: {
        clay: "2rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      textColor: {
        primary: "#4db6ac",
        secondary: "#009688",
      },
      borderColor: {
        primary: "#4db6ac",
        secondary: "#009688",
      },
      backgroundImage: {
        "clay-gradient": "linear-gradient(135deg, #f0f0f0 0%, #e5e5e5 100%)",
      },
      transitionProperty: {
        default:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionDuration: {
        default: "300ms",
      },
    },
  },
  plugins: [],
};

module.exports = config;
