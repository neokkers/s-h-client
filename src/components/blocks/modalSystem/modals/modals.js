import React from "react";
import { RegisterModal } from "./RegisterModal/RegisterModal";
import { LoginModal } from "./LoginModal/LoginModal";
import { AddWerewolfGameModal } from "./AddWerewolfGameModal/AddWerewolfGameModal";
import { AddSHGameModal } from "./AddSHGameModal/AddSHGameModal";

export const modals = {
  registerModal: <RegisterModal />,
  loginModal: <LoginModal />,
  addWerewolfGameModal: <AddWerewolfGameModal />,
  addSHGameModal: <AddSHGameModal />,
};
