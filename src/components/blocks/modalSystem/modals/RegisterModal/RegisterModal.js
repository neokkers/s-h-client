import React, { useEffect } from "react";
import styled from "styled-components";
import { ModalBox } from "../../styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export const RegisterModal = styled(({ ...props }) => {
  return (
    <ModalBox {...props}>
      <Typography variant="h5" gutterBottom>
        Registration
      </Typography>
      <form action="">
        <TextField fullWidth label="Username" variant="outlined" />
        <TextField fullWidth label="Email" variant="outlined" />
        <TextField fullWidth label="Password" variant="outlined" />
        <TextField fullWidth label="Password confirmation" variant="outlined" />
      </form>
    </ModalBox>
  );
})`
  form {
    > div {
      margin-bottom: 0.5rem;
    }
  }
`;
