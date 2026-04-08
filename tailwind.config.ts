import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      boxShadow: {
        premium: "0 20px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.02) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
