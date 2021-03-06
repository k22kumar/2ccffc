import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    heading: {
      normal: 26,
      mobile: 20
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      fontSize: 16
    },
    link: {
      fontSize: 12
    },
  },
  breakpoints: {
    values: {
      s: 740,
      md: 1000,
      lg: 1500
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  },
  spacing: 2
});
