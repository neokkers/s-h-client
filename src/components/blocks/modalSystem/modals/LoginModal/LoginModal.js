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
  loginUserThunk,
  registerUserThunk,
  setUser,
} from "../../../../../_redux/slices/userSlice";

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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

export const LoginModal = styled(({ ...props }) => {
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

  const [f, { loading, error }] = useMutation(LOGIN_USER);

  const onSubmit = ({ username, password }, e) => {
    dispatch(loginUserThunk(f, { username, password }));
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <ModalBox {...props} onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign In</Title>
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
        <ButtonWithLoading
          variant="contained"
          color="primary"
          fullWidth
          type={"submit"}
          size={"large"}
          loading={loading}
        >
          Sign in
        </ButtonWithLoading>
        {error && (
          <Alert severity="error">
            {error.graphQLErrors[0]
              ? error.graphQLErrors[0].message
              : "server error"}
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
