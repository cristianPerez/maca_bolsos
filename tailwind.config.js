/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "negro-cafe": "#2B2724",
        terracota: "#B07C5B",
        "terracota-oscuro": "#8A5A3B",
        arena: "#D9C4A9",
        crema: "#F4EDE3",
        dorado: "#C9A24B",
        "verde-oliva": "#7C8B6F",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Jost", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
