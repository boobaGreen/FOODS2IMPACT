import tailwindcssBrandColors from "tailwindcss-brand-colors";
import tailwindcssDebugScreens from "tailwindcss-debug-screens";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      customGrey: "#454444",
      customTurquese: "#35c4c4",
      customTurqueseDark: "#3a908d",
      customTurqueseMedium: "#3e6c6a",
      custoBlack: "#202020",
      white: "#ffffff",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssBrandColors, tailwindcssDebugScreens],
};
