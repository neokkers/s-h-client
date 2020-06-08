import React from "react";
import styled from "styled-components";

export const Logo = styled(({ logo, ...props }) => {
  return <img {...props} src={logo} />;
})`
  // background-image: url(${(props) => props.logo});
  // background-size: cover;
  // background-repeat: no-repeat;
  height: 50px;
`;
