import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071d24",
        forest: "#0a2b2b",
        pine: "#0f3d38",
        gold: "#f4be55",
        cream: "#f7f3e8",
        mint: "#99ddbd",
        coral: "#ef7b68",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
