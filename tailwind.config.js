module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transi: "#3e3e3e",
        redi: "#E93C24",
        orangei: "#FF6F1E",
        yellowi: "#FFC700",
        greeni: "#8ED100",
        bluei: "#00A3FF",
        lightbluei: "#2958FF",
        purplei: "#DB00FF",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        transi: "#3e3e3e",

        redi: "#E93C24",
        orangei: "#FF6F1E",
        yellowi: "#FFC700",
        greeni: "#8ED100",
        bluei: "#00A3FF",
        lightbluei: "#2958FF",
        purplei: "#DB00FF",
      }),
      maxWidth: {
        "1/18": "18rem",
        "1/16": "16rem",
      },
      width: {
        "1/300": "300%",
      },
      height: {
        "8/screen": "80vh",
        "6/screen": "60vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
