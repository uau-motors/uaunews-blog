import { Lato } from "next/font/google";
import { red } from "@mui/material/colors";
import { ThemeOptions } from "@mui/material/styles";

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Lato", "Helvetica", "Arial", "sans-serif"],
});

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#cc6119",
    },
    secondary: {
      main: "#212529",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
  },
};

export default lightThemeOptions;
