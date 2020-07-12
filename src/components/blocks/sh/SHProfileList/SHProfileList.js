import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { TitledBlock } from "../../TitledBlock";
import { ProfileCardSkeleton } from "../../Skeleton";
import { Sheet } from "../../../elements/Sheet";
import { rankReconciler } from "../../../../lib/ranks";
import { PlayerCard } from "../../PlayerCard";
import { listStyles, vhList } from "../../list/styles";
import { selectSHProfiles } from "../../../../_redux/slices/shProfilesSlice";

export const SHProfileList = styled(({ ...props }) => {
  const { loading, data } = useSelector(selectSHProfiles);

  const sortedData = [...data].sort((a, b) => b.elo - a.elo);

  return (
    <Sheet {...props}>
      <TitledBlock title={"Secret hitler players"}>
        {loading || !data ? (
          <ProfileCardSkeleton />
        ) : (
          sortedData.map(({ username: name, elo, _id }) => {
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
          })
        )}
      </TitledBlock>
    </Sheet>
  );
})`
  ${listStyles}
  ${vhList}
`;
