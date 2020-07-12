import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserRole } from "../../../../_redux/slices/userSlice";
import { TitledBlock } from "../../TitledBlock";
import { ProfileCardSkeleton } from "../../Skeleton";
import { Sheet } from "../../../elements/Sheet";
import { AddButton } from "../../../elements/Button";
import { listStyles, vhList } from "../../list/styles";
import { openModal } from "../../../../_redux/slices/modalSlice";
import { selectSHGames } from "../../../../_redux/slices/shGamesSlice";
import { selectSHProfiles } from "../../../../_redux/slices/shProfilesSlice";
import { GameCard } from "../../werewolf/GameCard/GameCard";

export const SHGameList = styled(({ ...props }) => {
  const dispatch = useDispatch();
  const { loading, data: games } = useSelector(selectSHGames);
  const { data: profiles } = useSelector(selectSHProfiles);

  const role = useSelector(selectUserRole);
  return (
    <Sheet {...props}>
      <TitledBlock title={"Secret hitler games"}>
        {loading || !games ? (
          <ProfileCardSkeleton />
        ) : (
          games.map((el) => {
            const villains = profiles.filter((el2) =>
              el.villains.includes(el2.userId)
            );
            const liberals = profiles.filter((el2) =>
              el.liberals.includes(el2.userId)
            );
            return (
              <GameCard
                key={el._id}
                wolves={[...villains].sort((a, b) => b.elo - a.elo)}
                villagers={[...liberals].sort((a, b) => b.elo - a.elo)}
                wolvesWon={el.villainsWon}
              />
            );
          })
        )}
      </TitledBlock>
      {role === "admin" && (
        <AddButton onClick={() => dispatch(openModal("addSHGameModal"))} />
      )}
    </Sheet>
  );
})`
  ${listStyles}
  ${vhList}
`;
