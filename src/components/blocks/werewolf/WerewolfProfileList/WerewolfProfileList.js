import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectWerewolfProfiles } from "../../../../_redux/slices/werewolfProfilesSlice";
import { TitledBlock } from "../../TitledBlock";
import { ProfileCardSkeleton } from "../../Skeleton";
import { Sheet } from "../../../elements/Sheet";
import { rankReconciler } from "../../../../lib/ranks";
import { PlayerCard } from "../../PlayerCard";

export const WerewolfProfileList = styled(({ ...props }) => {
  // const dispatch = useDispatch();
  const { loading, data } = useSelector(selectWerewolfProfiles);
  console.log(data, loading);

  return (
    <Sheet {...props}>
      <TitledBlock title={"Werewolf Players"}>
        {loading && <ProfileCardSkeleton />}
        {data
          // .sort((a, b) => b.elo - a.elo)
          .map(({ username: name, elo, _id }) => {
            const { rank, img } = rankReconciler(elo);
            return (
              <PlayerCard
                key={_id}
                img={img}
                name={name}
                elo={elo}
                rank={rank}
              />
            );
          })}
      </TitledBlock>
    </Sheet>
  );
})``;
