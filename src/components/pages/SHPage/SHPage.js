import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { setUserNav } from "../../../_redux/slices/userSlice";
import {
  fetchSHGames,
  selectSHGames,
} from "../../../_redux/slices/shGamesSlice";
import {
  fetchSHProfiles,
  selectSHProfiles,
} from "../../../_redux/slices/shProfilesSlice";
import { SHProfileList } from "../../blocks/sh/SHProfileList/SHProfileList";
import { SHGameList } from "../../blocks/sh/SHGameList/SHGameList";

export const SHPage = styled(({ className, ...props }) => {
  const dispatch = useDispatch();
  const { data: games } = useSelector(selectSHGames);
  const { data: profiles } = useSelector(selectSHProfiles);

  useEffect(() => {
    dispatch(setUserNav("secret-hitler"));

    async function fetchData() {
      if (!profiles.length) await dispatch(fetchSHGames());
      if (!games.length) await dispatch(fetchSHProfiles());
    }

    fetchData();
  }, [dispatch, games.length, profiles.length]);

  return (
    <Grid container spacing={3} className={className}>
      <Grid item xs={12} md={4} className={"vh-bar"}>
        <SHProfileList />
      </Grid>
      <Grid item xs={12} md={8} className={"vh-bar"}>
        <SHGameList />
      </Grid>
    </Grid>
  );
})`
  .vh-bar {
    position: relative;
    > div {
      position: relative;
      height: 100%;
    }
  }
`;
