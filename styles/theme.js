import { pink } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      dark: "#6b8f23",
      main: "#9ACD32",
      light: "#aed75b",
    },
    secondary: {
      dark: "#ab003c",
      main: "#f50057",
      light: "#f73378",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "#E1E1E1",
    background: {
      default: "#F6F6F7",
      paper: "#FFFFFF",
      tableHeader: "#F2F1F5",
    },
    borders: {
      grey: "#EAEAEA",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h6: {
      lineHeight: 1.1,
    },
  },
  spacing: 0.5,
});

theme = responsiveFontSizes(theme);

export default theme;