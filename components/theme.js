import { createTheme } from "@mui/material/styles";

export let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "white",
          "&$hover": {
            color: "white",
          },
          "&$focused": {
            color: "white",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#fff",
      info: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      info: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
  },
});
theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});
