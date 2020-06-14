import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authFromToken, setUser } from "../_redux/slices/userSlice";

export const withAuth = (Component) => (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authFromToken());
  }, [dispatch]);
  return <Component {...props} />;
};
