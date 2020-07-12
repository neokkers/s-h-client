import React, { useRef } from "react";
import styled from "styled-components";
import { ModalBox } from "../../styles";
import TextField from "@material-ui/core/TextField";

import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { Title } from "../../../../elements/Title";
import { ButtonWithLoading } from "../../../../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  authInterface,
  selectUserError,
  selectUserLoading,
} from "../../../../../_redux/slices/userSlice";
import { register as reg } from "../../../../../lib/apiService";

export const RegisterModal = styled(({ ...props }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  const { register, errors, watch, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = ({ username, email, password }, e) => {
    dispatch(authInterface(reg, { username, email, password }));
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <ModalBox {...props}>
      <Title>Registration</Title>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          error={!!errors.username}
          inputRef={register({
            required: "You must specify a username ",
          })}
          name={"username"}
        />
        {errors.username && (
          <Alert severity="error">{errors.username.message}</Alert>
        )}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          error={!!errors.email}
          inputRef={register({
            required: "You must specify an email",
          })}
          name={"email"}
        />
        {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          error={!!errors.password}
          type={"password"}
          inputRef={register({
            required: "You must specify a password",
            minLength: {
              value: 4,
              message: "Password must have at least 4 characters",
            },
          })}
          name={"password"}
        />
        {errors.password && (
          <Alert severity="error">{errors.password.message}</Alert>
        )}

        <TextField
          fullWidth
          label="Password confirmation"
          variant="outlined"
          type={"password"}
          error={!!errors.passwordConf}
          inputRef={register({
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
          name={"passwordConf"}
        />
        {errors.passwordConf && (
          <Alert severity="error">{errors.passwordConf.message}</Alert>
        )}
        <ButtonWithLoading
          variant="contained"
          color="primary"
          fullWidth
          type={"submit"}
          size={"large"}
          loading={loading}
        >
          register
        </ButtonWithLoading>
        {error && <Alert severity="error">{error}</Alert>}
      </form>
    </ModalBox>
  );
})`
  ${Title} {
    line-height: 1;
  }
  form {
    .MuiFormControl-root {
      margin-top: 1rem;
      &:first-child {
        margin-top: 2rem;
      }
    }
    ${ButtonWithLoading} {
      margin-top: 2rem;
    }
  }
`;
