import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "#212121",
        customDarkGreen: "#3b755e",
        customLightGreen: "#AFC6BD",
        customGreen: "#3c7460",
        customGrey: "#B0B0B0",
      },
    },
  },
  plugins: [],
} satisfies Config;
