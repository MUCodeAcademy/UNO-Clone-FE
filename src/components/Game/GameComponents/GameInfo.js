import React, { useContext } from "react";
import { GameContext } from "../../../shared/GameContext";
import Container from "@material-ui/core/Container";

const GameInfo = () => {
  const { playerArray, discardDeck, gameActive } = useContext(GameContext);

  return (
    <Container>
      {!gameActive && (
        <>
          <h3>Game has not started yet...</h3>
        </>
      )}

      {gameActive && (
        <>
          <h3>{playerArray[0] && `${playerArray[0].username}'s`} turn!</h3>
          <p>The color is {discardDeck[0] && `${discardDeck[0].color}`}</p>
          <p>{playerArray[1] && `${playerArray[1].username}`} is next!</p>
        </>
      )}
    </Container>
  );
};

export default GameInfo;
