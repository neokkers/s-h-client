import React from "react";
import styled from "styled-components";

export const Container = styled(({ ...props }) => {
  return <div {...props}></div>;
})`
  width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;
