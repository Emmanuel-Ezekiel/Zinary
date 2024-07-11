/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      backgroud: "#F8F8F8",
      Orange: {
        100: "#FF6600",
        90: "#FF751A",
        80: "#FF8533",
        70: "#FF944D",
        60: "#FFA366",
        50: "#FFB380",
        40: "#FFC299",
        30: "#FFD1B3",
        20: "#FFE0CC",
        10: "#FFF0E5",
      },
      Dark: {
        100: "#505050",
        90: "#616161",
        80: "#737373",
        70: "#848484",
        60: "#969696",
        50: "#A7A7A7",
        40: "#B9B9B9",
        30: "#CACACA",
        20: "#DCDCDC",
        10: "#EDEDED",
      },
      green: "#31D067",
      danger: "#EA523D",
      pending: "#FFA349",
      inactive: "#A7A7A7",
    },
    extend: {
      height: {
        70: "4.4rem",
        44: "2.75rem",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/bg.svg')",
      },
      boxShadow: {
        xl: "0px 4px 30px 0px #0000000F",
      },
      width: {
        70: "4.4rem",
        44: "2.75rem",
      },
      padding: {
        30: "1.9rem",
      },
    },
  },
  plugins: [],
};
