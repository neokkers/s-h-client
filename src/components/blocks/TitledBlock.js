import React from "react";
import styled from "styled-components";

export const TitledBlock = styled(({ title, children, ...props }) => {
  return (
    <div {...props}>
      <div className={"title"}>{title}</div>
      <div>{children}</div>
    </div>
  );
})`
  .title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;
