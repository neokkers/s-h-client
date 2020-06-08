import { css } from "styled-components";

// Font mixins
export const mainFont = css`
  font-family: "Montserrat", sans-serif;
`;

// Color mixins
export const withColors = css`
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  background-color: ${(props) =>
    props.theme.colors[props.bgColor] || props.theme.colors.bgPrimary};
`;

// Other
export const withFlex = css`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: ${props.flex.justify};
      align-items: ${props.flex.align};
    `}
`;
export const withSpaces = css`
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.theme.spaces[props.mt]};
    `}
  ${(props) =>
    props.mx &&
    css`
      margin-left: ${props.theme.spaces[props.mx]};
      margin-right: ${props.theme.spaces[props.mx]};
    `}
`;
