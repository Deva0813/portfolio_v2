import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear-1": "linear-gradient(90deg, var(--support-color-1) 0%, var(--support-color-2) 100%)",
        "gradient-linear-2": "linear-gradient(45deg, #FF836E 0%, #FFA170 100%)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;
