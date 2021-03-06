import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

export const ButtonWithLoading = styled(({ children, loading, ...props }) => {
  return (
    <Button {...props}>
      {loading ? <CircularProgress color={"secondary"} /> : children}
    </Button>
  );
})``;

export const AddButton = styled(({ ...props }) => {
  return (
    <div {...props}>
      <IconButton color="primary" aria-label="add">
        <AddIcon />
      </IconButton>
    </div>
  );
})``;
