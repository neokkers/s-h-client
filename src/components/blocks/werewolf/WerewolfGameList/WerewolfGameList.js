import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectWerewolfProfiles } from "../../../../_redux/slices/werewolfProfilesSlice";
import { selectUserRole } from "../../../../_redux/slices/userSlice";
import { TitledBlock } from "../../TitledBlock";
import { ProfileCardSkeleton } from "../../Skeleton";
import { rankReconciler } from "../../../../lib/ranks";
import { PlayerCard } from "../../PlayerCard";
import { Sheet } from "../../../elements/Sheet";
import { selectWerewolfGames } from "../../../../_redux/slices/werewolfGamesSlice";
import { GameCard } from "../GameCard/GameCard";
import { AddButton } from "../../../elements/Button";
import { listStyles } from "../styles";
import { openModal } from "../../../../_redux/slices/modalSlice";

export const WerewolfGameList = styled(({ ...props }) => {
  const dispatch = useDispatch();
  const { loading, data: games } = useSelector(selectWerewolfGames);
  const { data: profiles } = useSelector(selectWerewolfProfiles);

  const role = useSelector(selectUserRole);
  return (
    <Sheet {...props}>
      <TitledBlock title={"Werewolf games"}>
        {loading && <ProfileCardSkeleton />}
        {games.map((el) => {
          const wolves = profiles.filter((el2) =>
            el.wolves.includes(el2.userId)
          );
          const villagers = profiles.filter((el2) =>
            el.villagers.includes(el2.userId)
          );
          return (
            <GameCard
              key={el._id}
              wolves={[...wolves].sort((a, b) => b.elo - a.elo)}
              villagers={[...villagers].sort((a, b) => b.elo - a.elo)}
              wolvesWon={el.wolvesWon}
            />
          );
          console.log(wolves, villagers);
        })}
        {/*{data*/}
        {/*  // .sort((a, b) => b.elo - a.elo)*/}
        {/*  .map(({ username: name, elo, _id }) => {*/}
        {/*    const { rank, img } = rankReconciler(elo);*/}
        {/*    return (*/}
        {/*      <PlayerCard*/}
        {/*        key={_id}*/}
        {/*        img={img}*/}
        {/*        name={name}*/}
        {/*        elo={elo}*/}
        {/*        rank={rank}*/}
        {/*      />*/}
        {/*    );*/}
        {/*  })}*/}
      </TitledBlock>
      {role === "admin" && (
        <AddButton
          onClick={() => dispatch(openModal("addWerewolfGameModal"))}
        />
      )}
    </Sheet>
  );
})`
  ${listStyles}
`;
