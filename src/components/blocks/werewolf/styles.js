import { TitledBlock } from "../TitledBlock";
import { css } from "styled-components";
import { AddButton } from "../../elements/Button";

export const listStyles = css`
  ${TitledBlock} .children > div {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
  ${AddButton} {
    margin-top: 1rem;
  }
`;
