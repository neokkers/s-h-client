import React from "react";
import styled from "styled-components";
import { PlayerCard, PlayerCardSmall } from "../../PlayerCard";
import { rankReconciler } from "../../../../lib/ranks";
import { TitledBlock } from "../../TitledBlock";

export const GameCard = styled(({ wolves, villagers, wolvesWon, ...props }) => {
  return (
    <div {...props}>
      <div className="teams">
        <div className="wolves">
          <TitledBlock smallTitle title={"Wolves"}>
            {wolves.map(({ username: name, elo, _id }) => {
              const { rank, img } = rankReconciler(elo);
              return (
                <PlayerCardSmall
                  key={_id}
                  img={img}
                  name={name}
                  elo={elo}
                  rank={rank}
                />
              );
            })}
          </TitledBlock>
        </div>
        <div className="villagers">
          <TitledBlock smallTitle title={"Villagers"}>
            {villagers.map(({ username: name, elo, _id }) => {
              const { rank, img } = rankReconciler(elo);
              return (
                <PlayerCardSmall
                  key={_id}
                  img={img}
                  name={name}
                  elo={elo}
                  rank={rank}
                />
              );
            })}
          </TitledBlock>
        </div>
      </div>
      <div className="info">
        <div>{wolvesWon ? "Werewolves won" : "Villagers won"}</div>
      </div>
    </div>
  );
})`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: ${(props) => props.theme.utils.borderRadius};
  .teams {
    display: flex;
    > div {
      flex: 1;
      &:first-child {
        margin-right: 1rem;
      }
    }
  }
  .info {
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
  }
`;
