import styled, { css } from "styled-components";
export const ModalSystemStyled = styled.div`
  z-index: 999;
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalBox = styled.div`
  width: ${(props) => props.width || "400px"};
  max-height: 80vh;
  background-color: #fff;
  padding: 1rem;
  position: relative;
  overflow-y: auto;
  z-index: 2;
  border-radius: 5px;
`;
