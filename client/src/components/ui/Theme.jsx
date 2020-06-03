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
      purple: `${kidlogBlue}`,
      grey: `${textColorDark}`
    },
    primary: {
      main: `${kidlogBlue}`,
    },
    secondary: {
      main: `${kidlogPruple}`
    },
  },
  status: {
    danger: {
      main: `${redWarning}`
    },
  },
});

export default theme;
