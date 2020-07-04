import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../elements/Container";
import { Header } from "../Header";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../../_redux/slices/usersSlice";
import { Switch, Route, Redirect } from "react-router-dom";
import { WerewolfPage } from "../../pages/WerewolfPage/WerewolfPage";
import { SHPage } from "../../pages/SHPage/SHPage";

export const InfoPage = styled(({ ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div {...props}>
      <Header />
      <Container {...props}>
        <Switch>
          <Route path={"/secret-hitler"} component={SHPage} />
          <Route path={"/werewolves"} component={WerewolfPage} />

          <Redirect from={"/"} to={"/secret-hitler"} />
        </Switch>
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
