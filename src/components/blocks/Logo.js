import React from "react";
import styled from "styled-components";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";

export const Logo = styled(({ logo, ...props }) => {
  return <img {...props} src={logo} alt={"logo"} />;
})`
  height: 50px;
`;
export const LogoNew = styled(({ ...props }) => {
  return (
    <div {...props}>
      <LocalActivityIcon color={"primary"} />

      <span>PES RANKED SYSTEM</span>
    </div>
  );
})`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-weight: 800;
  line-height: 1;
  color: ${(props) => props.theme.colors.accent};
  span {
    margin-left: 0.5rem;
  }
`;
