import React from "react";
import { Box, Button, Form, FormField, TextArea } from "grommet";
import { save, load } from "../services/save_load";
import PlayerContext from "../contexts/PlayerContext";

function Utilities(props) {
  const [json, setJson] = React.useState();
  const playerContext = React.useContext(PlayerContext);
  return (
    <Box margin={"large"}>
      <Form value={json} onChange={(nextValue) => setJson(nextValue)}>
        <FormField label="Json Save Data" name="save_data">
          <Box width="large">
            <TextArea name="save_data" />
          </Box>
        </FormField>
        <Box direction="row" justify="between">
          <Button label="Save" onClick={() => save(setJson, playerContext)} />
          <Button label="Load" onClick={() => load(json, playerContext)} />
        </Box>
      </Form>
    </Box>
  );
}

export default Utilities;
