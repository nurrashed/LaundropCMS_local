module.exports = {
  theme: {
    extend: {
      height: {
        "1/2": "calc(50vh)",
        "1/3": "calc(33vh)",
        "1/4": "calc(25vh)",
        "2/3": "calc(66vh)"
      },
      backgroundColor: theme => ({
        primary: "#4DC1C3",
        secondary: "#2F9291"
      }),
      textColor: theme => ({
        primary: "#4DC1C3",
        secondary: "#2F9291"
      }),
      borderColor: theme => ({
        primary: "#4DC1C3",
        secondary: "#2F9291"
      }),
      fontSize: theme => ({
        "5xl": "40px",
        "6xl": "52px",
        "7xl": "60px",
        "8xl": "70px",
        "10xl": "110px"
      })
    }
  },
  variants: {},
  plugins: []
};
