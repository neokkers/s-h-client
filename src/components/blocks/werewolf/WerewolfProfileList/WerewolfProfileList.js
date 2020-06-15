import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectWerewolfProfiles } from "../../../../_redux/slices/werewolfProfilesSlice";
import { TitledBlock } from "../../TitledBlock";
import { ProfileCardSkeleton } from "../../Skeleton";
import { Sheet } from "../../../elements/Sheet";
import { rankReconciler } from "../../../../lib/ranks";
import { PlayerCard } from "../../PlayerCard";
import { selectUserRole } from "../../../../_redux/slices/userSlice";
import { listStyles } from "../styles";

export const WerewolfProfileList = styled(({ ...props }) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(selectWerewolfProfiles);
  const role = useSelector(selectUserRole);

  const sortedData = [...data].sort((a, b) => b.elo - a.elo);

  return (
    <Sheet {...props}>
      <TitledBlock title={"Werewolf players"}>
        {loading && <ProfileCardSkeleton />}
        {sortedData.map(({ username: name, elo, _id }) => {
          const { rank, img } = rankReconciler(elo);
          return (
            <PlayerCard key={_id} img={img} name={name} elo={elo} rank={rank} />
          );
        })}
      </TitledBlock>
    </Sheet>
  );
})`
  ${listStyles}
`;
