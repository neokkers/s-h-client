import React from "react";
import styled from "styled-components";
import { Divider } from "@material-ui/core";

const TitledBlockPreStyled = styled.div``;

export const TitledBlock = styled(({ title, children, ...props }) => {
  return (
    <TitledBlockPreStyled {...props}>
      <div className={"title"}>{title}</div>
      <Divider />
      <div className={"children"}>{children}</div>
    </TitledBlockPreStyled>
  );
})`
  > .title {
    font-weight: bold;
    line-height: 1;

    margin-bottom: 1rem;
    font-size: ${(props) => (props.smallTitle ? "1rem" : "1.2rem")};
  }
  > .children {
    margin-top: 1rem;
  }
`;
