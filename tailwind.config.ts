import type { Config } from "tailwindcss";

const config: Config = {
  content:[
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links to the Next.js optimized Inter font in layout.tsx
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins:[],
};

export default config;