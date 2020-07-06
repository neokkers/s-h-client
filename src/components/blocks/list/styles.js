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

export const vhList = css`
  position: relative;
  height: 100%;
  > ${TitledBlock} {
    height: calc(100vh - 200px);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    > div {
      &:last-child {
        position: relative;
        height: 100%;
        overflow: auto;
      }
    }
  }
`;
