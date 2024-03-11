import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest-green': '#00120B',
        'hawkes-blue': '#D3E0EA',
        'royal-blue': '#275FE8',
        'lime-green': '#1D933E',
        'platinum': '#EAECEE',
        'lavender-blue': '#C8D8FF',
        'rich-black': '#00120B',
        'indigo': '#1E285F',
        'ghost': '#BFC0C0',
        'secondary': '#184ED3',
        'primary': '#184ED3',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
