import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070b0f",
        panel: "#0b1118",
        line: "#263241",
        accent: "#79b8ff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto)", "sans-serif"],
      },
      maxWidth: {
        site: "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
