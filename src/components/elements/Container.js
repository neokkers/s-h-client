import React from "react";
import styled from "styled-components";

export const Container = styled(({ ...props }) => {
  return <div {...props}></div>;
})`
  width: 1440px;
  margin: 0 auto;
`;
