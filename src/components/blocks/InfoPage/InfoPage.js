import React, { useEffect } from "react";
import styled from "styled-components";
import { PlayerList } from "../PlayerList/PlayerList";
import { Container } from "../../elements/Container";
import { Header } from "../Header";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../_redux/slices/usersSlice";
import {
  fetchWerewolfProfiles,
  selectWerewolfProfiles,
} from "../../../_redux/slices/werewolfProfilesSlice";
import { WerewolfProfileList } from "../werewolf/WerewolfProfileList/WerewolfProfileList";

export const InfoPage = styled(({ ...props }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchWerewolfProfiles());
  }, [dispatch]);
  return (
    <div {...props}>
      <Header />
      {/*<Container {...props}>*/}
      {/*  <div className="flex-container">*/}
      {/*    <PlayerList />*/}
      {/*    <PlayerList />*/}
      {/*    <PlayerList />*/}
      {/*    <PlayerList />*/}
      {/*  </div>*/}
      {/*</Container>*/}
      <Container {...props}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <WerewolfProfileList />
          </Grid>
          <Grid item xs={3}>
            <PlayerList />
          </Grid>
          <Grid item xs={3}>
            <PlayerList />
          </Grid>
          <Grid item xs={3}>
            <PlayerList />
          </Grid>
        </Grid>
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
