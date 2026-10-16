import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        ink: "#090b10",
        panel: "#10141d",
        line: "#252b38",
        muted: "#9ba5b5",
        accent: "#a3e635",
      },
      boxShadow: {
        glow: "0 0 80px rgba(163, 230, 53, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
