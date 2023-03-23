/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      "max-992": { max: "992px" },
      "max-768": { max: "768px" },
      "max-720": { max: "720px" },
      "max-576": { max: "576px" },
      "max-390": { max: "390px" },
      "min-992": "992px",
      "max-480": { max: "480px" },
    },
    extend: {
      colors: {
        white100: "rgba(255, 255, 255, 0.8)",
        white300: "rgba(255, 255, 255, 0.3)",
        black100: "#4E4E4E",
        white200: "#F4F8F9;",
        blue100: "0BAEB9",
      },
    },
  },
  variants: {},
  plugins: [],
};
