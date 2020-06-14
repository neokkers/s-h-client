import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ModalBox } from "../../styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { Title } from "../../../../elements/Title";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { ButtonWithLoading } from "../../../../elements/Button";
import { useDispatch } from "react-redux";
import {
  registerUserThunk,
  setUser,
} from "../../../../../_redux/slices/userSlice";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      user {
        id
        username
      }
      token
      werewolfProfile {
        userId
        elo
        lost
        won
      }
    }
  }
`;

export const RegisterModal = styled(({ ...props }) => {
  const dispatch = useDispatch();

  const {
    register,
    errors,
    control,
    setValue,
    getValues,
    watch,
    handleSubmit,
    unregister,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [
    registerUser,
    { loading: registerLoading, error: registerError },
  ] = useMutation(REGISTER_USER);

  const onSubmit = ({ username, email, password }, e) => {
    dispatch(registerUserThunk(registerUser, { username, email, password }));
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <ModalBox {...props} onSubmit={handleSubmit(onSubmit)}>
      <Title>Registration</Title>
      <form action="">
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
          loading={registerLoading}
        >
          register
        </ButtonWithLoading>
        {registerError && (
          <Alert severity="error">
            {registerError.graphQLErrors[0].message}
          </Alert>
        )}
      </form>
    </ModalBox>
  );
})`
  ${Title} {
    line-height: 1;
    //text-align: center;
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