import React from "react";
import styled from "styled-components";
import { PlayerList } from "../PlayerList/PlayerList";
import { Container } from "../../elements/Container";
import { Header } from "../Header";

export const InfoPage = styled(({ ...props }) => {
  return (
    <div {...props}>
      <Header />
      <Container {...props}>
        <div className="flex-container">
          <PlayerList />
          <PlayerList />
          <PlayerList />
          <PlayerList />
        </div>
      </Container>
    </div>
  );
})`
  ${Header} {
    margin-bottom: 2rem;
  }
  > ${Container} {
    > .flex-container {
      display: flex;
      flex-wrap: wrap;
      margin: -0.5%;
      > div {
        flex-shrink: 0;
        //flex: 1;
        flex-basis: 23%;
        margin: 0.5%;
      }
    }
  }
`;
