/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "sans-serif"],
        "source-sans": ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
