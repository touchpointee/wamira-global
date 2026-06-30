import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "teal-deep": "#083F44",
        "teal-dark": "#061F23",
        "gold-champagne": "#C99A5F",
        "ivory-warm": "#FBF6F0",
        "cream-soft": "#F4EEE6",
        charcoal: "#1E2A2B",
        
        // Backward-compatible overrides
        obsidian: "#083F44",
        midnight: "#061F23",
        card: "#F4EEE6",
        gold: "#C99A5F",
        "gold-light": "#C99A5F",
        ivory: "#1E2A2B",
        muted: "#5C6869"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 12px 40px rgba(201, 154, 95, 0.12)",
        dark: "0 12px 40px rgba(6, 31, 35, 0.05)"
      },
      backgroundImage: {
        "luxury-radial": "radial-gradient(circle at 20% 10%, rgba(201,154,95,.06), transparent 40%), radial-gradient(circle at 80% 20%, rgba(8,63,68,.04), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
