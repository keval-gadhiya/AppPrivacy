import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#141414",
          soft: "#3a3a3a",
          // muted/faint are darkened so even small labels clear WCAG AA (4.5:1)
          // on the #F3F4F6 canvas and on white cards.
          muted: "#565656",
          faint: "#6d6d6d",
        },
        canvas: "#F3F4F6",
        line: "#e7e8ea",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "24px",
        "2xl": "20px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,20,20,0.04), 0 8px 24px rgba(20,20,20,0.05)",
        soft: "0 1px 3px rgba(20,20,20,0.05)",
        phone: "0 30px 60px -20px rgba(20,20,20,0.22), 0 12px 28px -12px rgba(20,20,20,0.14)",
        lift: "0 2px 4px rgba(20,20,20,0.05), 0 18px 40px -16px rgba(20,20,20,0.12)",
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
