import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const Header = styled(({ ...props }) => {
  return (
    <div {...props}>
      <Container maxWidth="sm"></Container>
    </div>
  );
})``;
