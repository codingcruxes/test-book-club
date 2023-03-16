import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#f1f1f1",
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
  padding: {
    small: 8,
    medium: 14,
    large: 24,
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      root: {
        borderRadius: 9,
      },
      containedPrimary: {
        backgroundColor: "#ffffff",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid grey",
        },
      },
    },
  },
});

export default theme;
