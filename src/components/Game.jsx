import React from "react";
import { Box, Grid, Heading, Text } from "grommet";
import { Cloud, Document, Cut } from "grommet-icons";
import PlayerContext from "../contexts/PlayerContext";
import ToastContext from "../contexts/ToastContext";
import notify from "../services/notify";

const calculateWinner = (weapon1, weapon2) => {
  switch (weapon1) {
    case "rock":
      switch (weapon2) {
        case "rock":
          return "draw";
        case "paper":
          return weapon2;
        case "scissors":
          return weapon1;
        default:
          break;
      }
      break;
    case "paper":
      switch (weapon2) {
        case "rock":
          return weapon1;
        case "paper":
          return "draw";
        case "scissors":
          return weapon2;
        default:
          break;
      }
      break;
    case "scissors":
      switch (weapon2) {
        case "rock":
          return weapon2;
        case "paper":
          return weapon1;
        case "scissors":
          return "draw";
        default:
          break;
      }
      break;
    default:
      break;
  }
};

const handleClick = (weapon, round, setRound, playerContext, toastContext) => {
  let newPlayers = { ...playerContext.players };
  let newRound = { ...round };
  // if Its the first players turn
  if (playerContext.players.turn === 1) {
    //store data in round
    newRound.w1 = weapon;
    newPlayers.turn = 2;
  } else if (playerContext.players.turn === 2) {
    let winner = calculateWinner(round.w1, weapon);
    if (round.w1 === winner) {
      //Player 1 won
      newPlayers.player1.score++;
      const message = playerContext.players.player1.name + "won!";
      notify(message, toastContext);
    }
    //Player 2 won
    else if (weapon === winner) {
      const message = playerContext.players.player2.name + "won!";
      newPlayers.player2.score++;
      notify(message, toastContext);
    } else if (winner === "draw") {
      const message = "It was a draw!";
      notify(message, toastContext);
    }
    round = {};
    newPlayers.turn = 1;
  }
  setRound(newRound);
  playerContext.setPlayers(newPlayers);
  return;
};

function Game(props) {
  const playerContext = React.useContext(PlayerContext);
  const toastContext = React.useContext(ToastContext);
  const [round, setRound] = React.useState({ w1: "" });
  return (
    <Box>
      <Heading>
        {playerContext.players.turn === 1
          ? playerContext.players.player1.name
          : playerContext.players.player2.name}
        ... Choose Your Weapon.
      </Heading>
      <Grid columns={["small", "small", "small"]} gap="medium" rows="small">
        <Box
          onClick={() =>
            handleClick("rock", round, setRound, playerContext, toastContext)
          }
          hoverIndicator
          fill
          align="center"
          justify="center"
        >
          <Cloud size="xxlarge" />
        </Box>
        <Box
          onClick={() =>
            handleClick("paper", round, setRound, playerContext, toastContext)
          }
          hoverIndicator
          fill
          align="center"
          justify="center"
        >
          <Document size="xxlarge" />
        </Box>
        <Box
          onClick={() =>
            handleClick(
              "scissors",
              round,
              setRound,
              playerContext,
              toastContext
            )
          }
          hoverIndicator
          fill
          align="center"
          justify="center"
        >
          <Cut size="xxlarge" />
        </Box>
      </Grid>
    </Box>
  );
}

export default Game;
