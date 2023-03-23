module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "base-100": "#FFFFFF",
          "base-200": "#EBEBEB",
          "base-300": "#E6E6E6",
          "base-400": "#D0D0D0",
          primary: "#525252",
          secondary: "#656565",
          accent: "#000000",
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
