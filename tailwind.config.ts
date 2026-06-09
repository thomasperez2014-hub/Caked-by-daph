import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EE",
        beige: "#F2ECE4",
        taupe: "#6E5E4E",
        accent: "#B89D84",
        "dark-taupe": "#4F4338",
        border: "#E6DDD3",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["Palatino Linotype", "Palatino", "Book Antiqua", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
