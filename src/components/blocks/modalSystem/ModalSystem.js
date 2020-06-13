import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, closeModal } from "../../../_redux/slices/modalSlice";
import { modals } from "./modals/modals";
import { ModalOverlay, ModalSystemStyled } from "./styles";

export const ModalSystem = ({ className }) => {
  const dispatch = useDispatch();
  const { currentModal } = useSelector(selectModal);

  if (!currentModal) return null;
  const modal = modals[currentModal];

  return (
    <ModalSystemStyled>
      <ModalOverlay onClick={() => dispatch(closeModal())}></ModalOverlay>
      {modal}
    </ModalSystemStyled>
  );
};
