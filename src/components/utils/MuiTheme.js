import React from "react";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderMui } from "@material-ui/core/styles";
import { lightTheme } from "../themes";
import { StylesProvider } from "@material-ui/styles";

export const MuiTheme = ({ children }) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [lightTheme.utils.fontFamily],
    },
    palette: {
      text: {
        primary: lightTheme.colors.primary,
      },
      primary: {
        light: lightTheme.colors.accent,
        main: lightTheme.colors.accent,
        dark: lightTheme.colors.accent,
        contrastText: "#ffffff",
      },
      secondary: {
        light: lightTheme.colors.primary,
        main: lightTheme.colors.primary,
        dark: lightTheme.colors.primary,
        contrastText: "#ffffff",
      },

      neutral: {
        main: "#5c6ac4",
      },
    },
    overrides: {
      MuiInput: {
        input: {
          "&::placeholder": {},
        },
      },
    },
  });

  return (
    <ThemeProviderMui theme={theme}>
      <StylesProvider injectFirst>{children}</StylesProvider>
    </ThemeProviderMui>
  );
};
