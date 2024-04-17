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
        'dark-jade': '#0c2b2d',
        'medium-jade': '#457875',
        'bright-jade': '#4aeda3',
        'mint': '#d4f5e5',
        'dark-gold': '#4f4029',
        'medium-gold': '#a67a38',
        'bright-yellow': '#f5ff52',
        'pale-yellow': '#fff2bd',
        'dark-red': '#472b2b',
        'medium-red': '#782b2b',
        'bright-red': '#f02642',
        'pink': '#ffd6db',
        'charcoal': '#24242b',
        'sand': '#e8e0d9',
        'tan': '#faf7f5'
      }
    },
  },
  plugins: [],
};
export default config;
