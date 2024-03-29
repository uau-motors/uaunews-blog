import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#cc6119"
    },
    secondary: {
      main: "#FFF"
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#cc6119"
    },
    secondary: {
      main: "#343a40"
    }
  }
});

export { lightTheme, darkTheme };
