import React from "react";
import { Box, Heading, Text } from "grommet";
import PlayerContext from "../contexts/PlayerContext";

function Scoreboard(props) {
  const playerContext = React.useContext(PlayerContext);
  return (
    <Box border width={"medium"} align="center">
      <Heading level="3">Score Board</Heading>
      <Box pad="medium" fill direction="row" justify="between">
        <Text>
          <b>{playerContext.players.player1.name}</b>
        </Text>
        <Text>{playerContext.players.player1.score}</Text>
      </Box>
      <Text size="xlarge">VS</Text>
      <Box pad="medium" fill direction="row" justify="between">
        <Text>
          <b>{playerContext.players.player2.name}</b>
        </Text>
        <Text>{playerContext.players.player2.score}</Text>
      </Box>
    </Box>
  );
}

export default Scoreboard;
