import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0px",
        },
      },
      fontFamily: {
        "morabba": "morabba",
        'morabba-bold': "morabba-bold",
        'morabba-light': "morabba-light",
        "dana": "dana",
        "dana-bold": "dana-bold",
      },
    },
  },
  plugins: [],
};
export default config;
