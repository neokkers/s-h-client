import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../_redux/slices/modalSlice";

export const UserWidget = styled(({ ...props }) => {
  const dispatch = useDispatch();
  return (
    <div {...props}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(openModal("registerModal"))}
      >
        Sign up
      </Button>
      <Button variant="contained" color="primary">
        Sign in
      </Button>
    </div>
  );
})`
  > button {
    &:first-child {
      margin-right: 0.5rem;
    }
  }
`;
