import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import overrides from '../../MuiTheme/ui/overrides/index';
let theme = createMuiTheme({
  palette: {
    common: {
      grey: `#DFE8F`,
      light: '#fcfbfb',
    },
    primary: {
      dark: `#9694EF`,
      main: '#504DE5',
      light: '#D5D4F9',
    },
    secondary: {
      main: `#6F8BA4`,
      dark: '#3B566E',
      light: '#C0D1E1',
    },
    error: {
      main: '#E26453',
    },
    bakcground: {
      default: '#FCFBFB',
    },
  },

  typography: {
    h1: {
      fontSize: 36,
      lineHeight: 2,
      fontWeight: 400,
    },
    h2: {
      fontSize: 36,
      lineHeight: 1.5,
      fontWeight: 700,
      letterSpacing: '0.32px',
    },
    h3: {
      fontSize: 22,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    h4: {
      fontSize: 18,
      lineHeight: 1.5,
      fontWeight: 400,
    },
    h5: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#3B566E',
    },
    body1: {
      fontSize: 16,
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
  shadows: [
    {
      25: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.06);',
    },
    { 26: ' 0px 0px 4px rgba(0, 0, 0, 0.25)' },
    { 27: '0px 2px 14px rgba(0, 0, 0, 0.16)' },
  ],
  overrides,
});

theme = responsiveFontSizes(theme);
export default theme;
