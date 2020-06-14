import React from "react";
import styled from "styled-components";

export const Title = styled(({ ...props }) => {
  return <div {...props}></div>;
})`
  font-size: 1.5rem;
  font-weight: bold;
`;
