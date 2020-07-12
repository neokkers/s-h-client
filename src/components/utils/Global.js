import { createGlobalStyle } from "styled-components";
import { mainFont } from "./Mixins";

export const GlobalStyle = createGlobalStyle`
 
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 1.3;
    @media screen and (max-device-width: ${(props) => props.theme.media.s}) {
      font-size: 14px;
    }
  }
  body {
    color: ${(props) => props.theme.colors.primary};
    margin: 0;
    background-color: ${(props) => props.theme.colors.bgSecondary};
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }
  * > *{
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
