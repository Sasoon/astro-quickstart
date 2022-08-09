/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "accent-black": "#000",
        "accent-yellow": "#fec824",
        "accent-grey": "#ededf1",
      },
      fontFamily: {
        muli: ["muli"],
        darkergrotesque: ["Darker Grotesque"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
