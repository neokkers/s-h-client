import React from "react";
import styled from "styled-components";
import { Container } from "../elements/Container";
import LogoImg from "../../static/logo2.png";
import { Logo, LogoNew } from "./Logo";
import { UserWidget } from "./UserWidget";
import Nav from "./Nav/Nav";

export const Header = styled(({ ...props }) => {
  return (
    <div {...props}>
      <Container>
        <LogoNew logo={LogoImg} />
        <Nav />
        <UserWidget />
      </Container>
    </div>
  );
})`
  box-shadow: ${(props) => props.theme.utils.boxShadow};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
