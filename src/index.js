import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./_redux/store";
import { Provider, useSelector } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { selectTheme } from "./_redux/slices/themeSlice";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/utils";

import { MuiTheme } from "./components/utils/MuiTheme";

const Root = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <MuiTheme>
        <GlobalStyle />
        <App />
      </MuiTheme>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
