import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // <-- Tambahkan baris ini
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bangsoal: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        surface: {
          100: colors.white,
          200: colors.gray[100],
          300: colors.gray[200],
        },
        content: {
          100: colors.gray[900],
          200: colors.gray[700],
          300: colors.gray[500],
        },
      },
      backgroundImage: {
        "emerald-teal": "linear-gradient(255deg, #3BD9D9 -2.5%, #53DDB7 45.29%)",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
