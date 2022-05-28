import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#AB9DFF",
      main: "#5769FF",
      dark: "#2B1D7F",
    },
    secondary: {
      light: "#40D2FB",
      main: "#00C3F9",
      dark: "#0092BB",
    },
    background: {
      // default: "#F7F8FA",
      // paper: "#FFFFFF",
    },
    text: {
      // secondary: "#9095A2",
      // primary: "#2A3256",
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
          // height: 56,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        // color: "transparent",
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default darkTheme;
