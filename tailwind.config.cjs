/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
        tertiary: "#CCD6F6",
        textcolor: "#8892B0",
        aboutBg: "#112240",
      },
      fontFamily: {
        kanit: ["kanitReg", "sans-serif"],
        roboto: ["robotoReg", "sans-serif"],
      },
    },
    backgroundImage: {
      img0: "url('./assets/Bootcamp.png')",
      img1: "url('./assets/Hoobank.png')",
      img2: "url('./assets/Signup.png')",
    },
    screens: {
      s: "450px",
      xs: "480px",
      xss: "540px",
      ss: "620px",
      sss: "670px ",
      sm: "768px",
      ssm: "850px",
      smd: "950px",
      md: "1060px",
      lg: "1120px",
      xl: "1200px",
    },
  },
  plugins: [],
};
