import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const kidlogBlue = "#504de5";
const kidlogPruple = '#7c79FF';
const prupleDisabled = "#8c8ae4";
const greyLight = "rgba(192, 209, 224, 0.5);";
const greyPlaceholsder = "#C0D1E0";
const textColorDark = "#6F8BA4";
const textColorLight = "#3B566E";
const redWarning = "#E26453";

const theme = createMuiTheme({
  palette: {
    common: {
      grey: `#DFE8F`,
    },
    primary: {
      dark: `#9694EF`,
      main: "#504DE5",
      light: "#D5D4F9",
    },
    secondary: {
      main: `#6F8BA4`,
      dark: "#3B566E",
      light: "#C0D1E1",
    },
    bakcground: {
      default: "#FCFBFB",
    },
  },
  status: {
    danger: {
      main: `${redWarning}`,
    },
  },
  typography: {
    h1: {
      fontSize: "2.4rem",
      lineHeight: 2,
      fontWeight: 400,
    },
    h2: {
      fontSize: "24px",
      lineHeight: 1.5,
      fontWeight: 700,
      letterSpacing: "0.32px",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: 22,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.4rem",
      lineHeight: 1.5,
      fontWeight: 400,
      "@media (max-width:769px)": {
        fontSize: "1.3rem",
      },
      "@media (max-width:481px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 25,
  },
  shadows: {
    0: "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.06);",
    1: " 0px 0px 4px rgba(0, 0, 0, 0.25)",
  },
});

export default theme;
