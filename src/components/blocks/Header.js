import React from "react";
import styled from "styled-components";
import { Container } from "../elements/Container";
import LogoImg from "../../static/logo2.png";
import { Logo } from "./Logo";

export const Header = styled(({ ...props }) => {
  return (
    <div {...props}>
      <Container>
        <Logo logo={LogoImg} />
      </Container>
    </div>
  );
})`
  box-shadow: ${(props) => props.theme.utils.boxShadow};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Logo} {
    margin-top: 3px;
  }
`;
