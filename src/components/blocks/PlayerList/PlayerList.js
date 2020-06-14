import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { TitledBlock } from "../TitledBlock";
import { Sheet } from "../../elements/Sheet";
import { PlayerCard } from "../PlayerCard";
import { rankReconciler } from "../../../lib/ranks";
import { ProfileCardSkeleton } from "../Skeleton";

const GET_PLAYERS = gql`
  {
    users {
      id
    }
  }
`;

export const PlayerList = styled(({ ...props }) => {
  const { data, loading, error } = useQuery(GET_PLAYERS);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const dataAvailable = !loading && !error;
  let sorted = [];
  // if (dataAvailable) sorted = data.users.sort((a, b) => a.elo - b.elo);
  return (
    <Sheet {...props}>
      <TitledBlock title={"Players"}>
        {!dataAvailable && <ProfileCardSkeleton />}
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
