/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5051f9',
        hoverPrimary: '#e8eaff',
        sideBarBg: '#fbfaff',
        bodyBg: '#f3f4f8',
        sky: '#bfe2ff',
        dark: '#1E1E20',
        light: '#FFFFFF',
        purple: '#6C5A7C',
        purpleHover: '#a798b4',
        purpleCard: '#E8E4F1',
        grayBanner: '#eeeeee',
        grayCard: '#F0EEED',
        grayFooter: '#F0F0F0',
      },
    },
  },
  plugins: [],
};
