import React from "react";
import styled from "styled-components";

export const PlayerCard = styled(({ name, rank, elo, ...props }) => {
  return (
    <div {...props}>
      <div className={"img"}></div>
      <div className="content">
        <div className={"name"}>{name}</div>
        <div className={"rank"}>{rank}</div>
        <div className={"elo"}>elo: {elo}</div>
      </div>
    </div>
  );
})`
  height: 100px;
  display: flex;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 5px;
  // box-shadow: ${(props) => props.theme.utils.boxShadow};
  align-items: center;
  .img {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.img});
    margin-right: 1rem;
  }
  .content {
    .name {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .elo {
      color: ${(props) => props.theme.colors.accent};
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;
