import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abn: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E6E7EB",
          300: "#D2D5DB",
          400: "#9DA3AE",
          500: "#6C727F",
          600: "#4D5562",
          700: "#394150",
          800: "#212936",
          900: "#121826",
        },
        abgp: {
          50: "#F5FFF5",
          100: "#ECFEEB",
          200: "#E2FEE2",
          300: "#B7F7B6",
          400: "#51F688",
          500: "#2CC960",
          600: "#30B42D",
          700: "#279325",
          800: "#136911",
        },
        abr: {
          50: "#FEF6F6",
          100: "#FDEEEC",
          200: "#FDE5E3",
          300: "#F9BAB3",
          400: "#F16455",
          500: "#E32612",
          600: "#95190C",
          700: "#711309",
        },
        abb: {
          50: "#F5FBFE",
          100: "#ECF6FE",
          200: "#E2F2FD",
          300: "#B1DCFB",
          400: "#4DB1F9",
          500: "#078CED",
          600: "#0669B2",
          700: "#044B7F",
        },
        aby: {
          50: "#FFFDF5",
          100: "#FFFBEB",
          200: "#FEF8E1",
          300: "#FDEDAF",
          400: "#FBD74B",
          500: "#D5AD13",
          600: "#917712",
          700: "#685612",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
