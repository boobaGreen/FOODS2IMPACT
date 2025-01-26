import tailwindcssBrandColors from "tailwindcss-brand-colors";
import tailwindcssDebugScreens from "tailwindcss-debug-screens";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
