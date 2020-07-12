import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { WerewolfProfileList } from "../../blocks/werewolf/WerewolfProfileList/WerewolfProfileList";
import { WerewolfGameList } from "../../blocks/werewolf/WerewolfGameList/WerewolfGameList";
import { useDispatch, useSelector } from "react-redux";
import { setUserNav } from "../../../_redux/slices/userSlice";
import {
  fetchWerewolfProfiles,
  selectWerewolfProfiles,
} from "../../../_redux/slices/werewolfProfilesSlice";
import {
  fetchWerewolfGames,
  selectWerewolfGames,
} from "../../../_redux/slices/werewolfGamesSlice";

export const WerewolfPage = styled(({ className, ...props }) => {
  const dispatch = useDispatch();
  const { data: wProfiles } = useSelector(selectWerewolfProfiles);
  const { data: wGames } = useSelector(selectWerewolfGames);

  useEffect(() => {
    dispatch(setUserNav("werewolves"));

    async function fetchData() {
      if (!wProfiles.length) await dispatch(fetchWerewolfProfiles());
      if (!wGames.length) await dispatch(fetchWerewolfGames());
    }

    fetchData();
  }, [dispatch, wGames, wProfiles]);

  return (
    <Grid container spacing={3} className={className}>
      <Grid item xs={12} md={4}>
        <WerewolfProfileList />
      </Grid>
      <Grid item xs={12} md={8}>
        <WerewolfGameList />
      </Grid>
    </Grid>
  );
})``;
