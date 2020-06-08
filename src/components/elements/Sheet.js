import React from "react";
import styled from "styled-components";

export const Sheet = styled(({ ...props }) => {
  return <div {...props}></div>;
})`
  padding: 1rem;
  box-shadow: ${(props) => props.theme.utils.boxShadow};
`;
