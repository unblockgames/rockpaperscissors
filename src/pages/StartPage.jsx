import { Box } from "grommet";
import React from "react";
import PreGameForm from "../components/PreGameForm";

function Start(props) {
  return (
    <Box align="center">
      <Box width={"medium"}>
        <PreGameForm />
      </Box>
    </Box>
  );
}

export default Start;
