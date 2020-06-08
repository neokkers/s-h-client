import { createGlobalStyle } from "styled-components";
import { mainFont } from "./Mixins";

export const GlobalStyle = createGlobalStyle`
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 1.3;
  }
  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.bgSecondary};
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }
  * {
    color: ${(props) => props.theme.colors.primary};
    box-sizing: border-box;
    ${mainFont};
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  input, button, video {
    outline: none;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
