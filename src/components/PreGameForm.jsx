import React from "react";
import { Box, Button, Form, FormField, TextInput, Text } from "grommet";
import { useNavigate } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";

const handleSubmit = (value, navigate, playerContext) => {
  playerContext.players.player1.name = value.player1;
  playerContext.players.player2.name = value.player2;
  //save data and navigate
  playerContext.setPlayers(playerContext.players);
  navigate("/play");
};

function PreGameForm(props) {
  const playerContext = React.useContext(PlayerContext);
  const [value, setValue] = React.useState();
  const navigate = useNavigate();
  return (
    <Form
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onSubmit={() => handleSubmit(value, navigate, playerContext)}
    >
      <FormField name="player1" label="Player 1 Name">
        <TextInput name="player1" />
      </FormField>
      <FormField name="player2" label="Player 2 Name">
        <TextInput name="player2" />
      </FormField>
      <Box width={"medium"}>
        <Button fill primary type="submit" label="Play Game!"></Button>
      </Box>
    </Form>
  );
}

export default PreGameForm;
