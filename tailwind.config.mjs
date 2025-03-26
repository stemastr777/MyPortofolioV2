/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist:[
    {
      pattern: /border-(blue|red|green|orange|yellow|purple)-(400|600)/
    },
    {
      pattern: /bg-(blue|red|green|orange|yellow|purple)-(400|600)/
    },
    {
      pattern: /border-(blue|red|green|orange|yellow|purple)-(400)/,
      variants: ['hover']
    },
    {
      pattern: /shadow-(blue|red|green|orange|yellow|purple)-400/,
      variants: ['hover']
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    },
  },
  plugins: [],
};
