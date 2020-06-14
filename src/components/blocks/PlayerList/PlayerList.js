import React, { useEffect } from "react";
import styled from "styled-components";
import { TitledBlock } from "../TitledBlock";
import { Sheet } from "../../elements/Sheet";
import { PlayerCard } from "../PlayerCard";
import { rankReconciler } from "../../../lib/ranks";
import { ProfileCardSkeleton } from "../Skeleton";
import { selectPlayers, setPlayers } from "../../../_redux/slices/playersSlice";
import { useDispatch, useSelector } from "react-redux";

export const PlayerList = styled(({ ...props }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (users.users && werewolfProfiles.werewolfProfiles) {
  //     const playersData = users.users.map((el) => {
  //       el.werewolfProfiles = werewolfProfiles.werewolfProfiles.find(
  //         (el2) => el2.userId === el.id
  //       );
  //       return el;
  //     });
  //     dispatch(setPlayers(playersData));
  //   }
  // }, [dispatch, users.users, werewolfProfiles.werewolfProfiles]);
  // if (dataAvailable) sorted = data.users.sort((a, b) => a.elo - b.elo);
  return (
    <Sheet {...props}>
      <TitledBlock title={"Players"}>
        {false && <ProfileCardSkeleton />}
        {/*{dataAvailable &&*/}
        {/*  data.users*/}
        {/*    .sort((a, b) => b.elo - a.elo)*/}
        {/*    .map(({ name, elo, id }) => {*/}
        {/*      const { rank, img } = rankReconciler(elo);*/}
        {/*      return (*/}
        {/*        <PlayerCard*/}
        {/*          key={id}*/}
        {/*          img={img}*/}
        {/*          name={name}*/}
        {/*          elo={elo}*/}
        {/*          rank={rank}*/}
        {/*        />*/}
        {/*      );*/}
        {/*    })}*/}
      </TitledBlock>
    </Sheet>
  );
})`
  ${PlayerCard} {
    margin-bottom: 0.3rem;
  }
`;
