import React from "react";
import styled from "styled-components";
import { Container } from "../elements/Container";
import LogoImg from "../../static/logo2.png";
import { LogoNew } from "./Logo";
import { UserWidget } from "./UserWidget";
import Nav from "./Nav/Nav";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { selectTheme } from "../../_redux/slices/themeSlice";

export const Header = styled(({ ...props }) => {
  const theme = useSelector(selectTheme);
  const more750 = useMediaQuery({
    query: `(min-device-width: ${theme.media.s})`,
  });

  return (
    <div {...props}>
      <Container>
        <LogoNew logo={LogoImg} />
        {more750 && <Nav />}
        <UserWidget />
      </Container>
      {!more750 && <Nav />}
    </div>
  );
})`
  box-shadow: ${(props) => props.theme.utils.boxShadow};
  height: 60px;
  display: flex;
  ${LogoNew} {
    margin-right: 1rem;
  }
  align-items: center;
  justify-content: space-between;
  > ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-device-width: ${(props) => props.theme.media.s}) {
    display: block;
    ${LogoNew} {
      width: 30%;
    }
    > ${Container} {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    height: auto;
  }
`;
