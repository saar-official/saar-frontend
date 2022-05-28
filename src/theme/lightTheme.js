import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#AB9DFF",
      main: "#8C30F5",
      dark: "#2B1D7F",
    },
    secondary: {
      light: "#40D2FB",
      main: "#00C3F9",
      dark: "#0092BB",
    },
    error: {
      main: "#FF0000",
    },
    background: {
      default: "#F7F8FA",
      paper: "#FFFFFF",
    },
    text: {
      secondary: "#516075",
      primary: "#11243F",
      disabled: "#11243F59",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },

  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        placement: "bottom-end",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
      },
      styleOverrides: {
        root: {
          height: 56,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        // color: "transparent",
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          my: 2
        }
      }
    }
  },
  shape: {
    borderRadius: 10,
  },
});

export default lightTheme;
