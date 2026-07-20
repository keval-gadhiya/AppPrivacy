import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome ramp on a white page. All values below #767676 clear
        // WCAG AA (4.5:1) on white, so any of them is safe for body text.
        ink: {
          DEFAULT: "#111111",
          body: "#2b2b2b",
          muted: "#5c5c5c",
          faint: "#6f6f6f",
        },
        line: "#e9e9e9",
        "line-strong": "#dcdcdc",
        paper: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        reading: "44rem",
      },
      letterSpacing: {
        tightish: "-0.02em",
        tighter2: "-0.035em",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
