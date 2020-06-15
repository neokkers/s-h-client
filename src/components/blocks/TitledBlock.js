import React from "react";
import styled from "styled-components";
import { Divider } from "@material-ui/core";

export const TitledBlock = styled(({ title, children, ...props }) => {
  return (
    <div {...props}>
      <div className={"title"}>{title}</div>
      <Divider />
      <div className={"children"}>{children}</div>
    </div>
  );
})`
  > .title {
    font-weight: bold;
    line-height: 1;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  > .children {
    margin-top: 1rem;
  }
`;
