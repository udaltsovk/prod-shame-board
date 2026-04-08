/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#08080f",
        card: "#0f0f1c",
        "card-hover": "#141428",
        "quote-bg": "#181833",
        accent: "#e11d48",
        purple: "#8b5cf6",
        text: "#f0f0f0",
        "text-dim": "#d0d0d0",
        "text-muted": "#b0b0b0",
        border: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "16px",
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        "bounce-slow": "bounce 2.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.4s ease forwards",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, 30px) scale(1.08)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
