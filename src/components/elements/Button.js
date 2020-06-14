import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export const ButtonWithLoading = styled(({ children, loading, ...props }) => {
  return (
    <Button {...props}>
      {loading ? <CircularProgress color={"secondary"} /> : children}
    </Button>
  );
})``;
