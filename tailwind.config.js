/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-display": "'SF Pro Display'",
        inter: "Inter",
        "sf-pro-text": "'SF Pro Text'",
      },
    },
    colors: {
      white: "#fff",
      gray: {
        "100": "#f8f8f8",
        "200": "#f4f5f7",
        "300": "#efefef",
        "400": "#8d8787",
        "500": "#837f7f",
        "600": "#525151",
        "700": "#484747",
        "800": "#3d3d3d",
        "900": "#1e1e1e",
        "1000": "#111",
        "1100": "#09160f",
        "1200": "rgba(255, 255, 255, 0)",
      },
      green: "#04b256",
      black: "#000",
    },
    fontSize: {
      "2xs": "13px",
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "34px",
      "3xl": "40px",
      "4xl": "64px",
      "5xl": "96px",
    },
  },

};
