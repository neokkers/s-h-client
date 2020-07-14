import React from "react";
import styled from "styled-components";
import { PlayerCardSmall } from "../../PlayerCard";
import { rankReconciler } from "../../../../lib/ranks";
import { TitledBlock } from "../../TitledBlock";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../_redux/slices/userSlice";

export const GameCard = styled(({ wolves, villagers, wolvesWon, ...props }) => {
  const { nav } = useSelector(selectUser);
  return (
    <div {...props}>
      <div className="teams">
        <div className="wolves">
          <TitledBlock
            smallTitle
            title={nav === "werewolves" ? "Dark" : "Dark"}
          >
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
          <TitledBlock
            smallTitle
            title={nav === "werewolves" ? "Light" : "Light"}
          >
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
        <div>{wolvesWon ? "Dark won" : "Light won"}</div>
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
    @media screen and (max-device-width: ${(props) => props.theme.media.s}) {
      display: block;
      > div {
        flex: 1;
        &:first-child {
          margin: 0;
          margin-bottom: 1rem;
        }
      }
    }
  }
  .info {
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 1rem;
  }
`;
