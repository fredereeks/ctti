import type { Config } from 'tailwindcss'

const config: Config = {
  mode: "JIT",
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        gradient: "rgb(32, 148, 243)",
        sitetext: "#1F1F1F",
        danger: "#f34f7c",
        success: "#09dba0",
      },
    },
  },
  plugins: [],
}
export default config
