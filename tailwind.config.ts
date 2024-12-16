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
        customGreen: "#3B755F",
        customGrey: "#B0B0B0",
        customGrey2: "#c2c2c2",
        customBlue: "#2f3a8d",
        customIvory: "#F2EBDB",
      },
    },
  },
  plugins: [],
} satisfies Config;
