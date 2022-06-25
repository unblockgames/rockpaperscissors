import React from "react";
import { Box } from "grommet";
import Scoreboard from "../components/Scoreboard";
import Game from "../components/Game";
import Utilities from "../components/Utilities";

function GamePage(props) {
  return (
    <Box>
      <Box fill="horizontal" height={"50px"}></Box>
      <Box align="center">
        <Scoreboard />
      </Box>
      <Box align="center">
        <Game />
      </Box>
      <Box align="center">
        <Utilities />
      </Box>
    </Box>
  );
}

export default GamePage;
