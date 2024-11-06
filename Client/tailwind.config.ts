import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
      logo: "Proxima Nova",
      main: "Abyssinica SIL",
      subtitle: "Roboto Slab",
      ptSans: ["PT Sans", "sans-serif"],
      ptSansNarrow: ["PT Sans Narrow", "sans-serif"],
      Rajdhani: ["Rajdhani", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "primary-color-light": "#f5225e",
        "primary-color-dark": "#f95483",
        "main-header-light": "#4c2250",
        "main-header-dark": "#300c34",
        "main-background-light": "#3a183e",
        "main-background-dark": "#3a183e",
        "secondary-background-light": "#E5E7EB",
        "secondary-background-dark": "#374151",
        "background-header-light": "#F3F4F6",
        "background-header-dark": "#111827",
        "primary-text-light": "#1F2937",
        "primary-text-dark": "#F3F4F6",
        "secondary-text-light": "#4B5563",
        "secondary-text-dark": "#F3F4F6",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
    },
  },
  plugins: [],
};

export default config;
