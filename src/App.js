import logo from "./logo.svg";
import "./App.css";
import { Box, Grommet } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import React from "react";
import PlayerContext from "./contexts/PlayerContext";
import ToastContext from "./contexts/ToastContext";

function App() {
  const [players, setPlayers] = React.useState({
    turn: 1,
    player1: {
      name: "",
      score: 0,
    },
    player2: {
      name: "",
      score: 0,
    },
  });
  const [message, setMessage] = React.useState();
  return (
    <Grommet style={{ position: "relative" }}>
      <ToastContext.Provider
        value={{ message: message, setMessage: setMessage }}
      >
        {!message ? (
          ""
        ) : message.includes(players.player1.name) ? (
          <Box
            style={{ position: "absolute" }}
            width="500px"
            height="500px"
            background={"green"}
          >
            {players.player1.name} Won!
          </Box>
        ) : message.includes(players.player2.name) ? (
          <Box
            style={{ position: "absolute", right: "0px" }}
            width="500px"
            height="500px"
            background={"Aqua"}
          >
            {players.player2.name} Won!
          </Box>
        ) : message.includes("draw") ? (
          <Box
            width="500px"
            height="50px"
            background={"BlanchedAlmond"}
            fill="horizontal"
            style={{ position: "absolute" }}
            align="center"
          >
            DRAW!
          </Box>
        ) : (
          ""
        )}
        <PlayerContext.Provider
          value={{ players: players, setPlayers: setPlayers }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/play" element={<GamePage />} />
            </Routes>
          </Router>
        </PlayerContext.Provider>
      </ToastContext.Provider>
    </Grommet>
  );
}

export default App;
