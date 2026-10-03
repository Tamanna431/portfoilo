import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a1026",
        surface: "#101938",
        "surface-container": "#16224a",
        "surface-container-low": "#0e1535",
        primary: "#00d2ff",
        "primary-fixed": "#00e5ff",
        secondary: "#a3b8cc",
        "on-surface": "#ffffff",
        "on-surface-variant": "#e0e0e0",
        "on-primary": "#000000",
        "inverse-on-surface": "#ffffff",
        outline: "#3a4b7c",
      },
      maxWidth: {
        "container-max": "1200px",
      },
      spacing: {
        gutter: "32px",
        "section-padding": "120px",
        "stack-gap-lg": "48px",
        "stack-gap-md": "24px",
        "stack-gap-sm": "12px",
      },
      fontSize: {
        "label-sm": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg": ["42px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-hero": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;
