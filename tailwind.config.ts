import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: "#526371",
        secondary: "#e8e9eb",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
      spacing: {
        "size-40": "40vw",
        "size-44": "44px",
      },
    },
  },
  plugins: [],
};

export default config;
