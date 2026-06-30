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
        obsidian: "#071312",
        midnight: "#0B1715",
        card: "#101C1A",
        gold: "#C99A5B",
        "gold-light": "#E4C08A",
        ivory: "#F7F0E6",
        muted: "#A8AAA4"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 18px 50px rgba(201, 154, 91, 0.14)",
        dark: "0 28px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "luxury-radial": "radial-gradient(circle at 20% 10%, rgba(201,154,91,.16), transparent 30%), radial-gradient(circle at 80% 20%, rgba(228,192,138,.08), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
