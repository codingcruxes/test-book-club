import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  spacing: {
    unit: 8,
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 24,
      },
      containedPrimary: {
        color: "#ffffff",
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: 600,
      },
    },
  },
});

export default theme;
