export const save = (setJson, playerContext) => {
  const json = { save_data: JSON.stringify(playerContext.players) };
  console.log(json);
  setJson(json);
  return;
};

export const load = (json, playerContext) => {
  const players = JSON.parse(json.save_data);
  playerContext.setPlayers(players);
  return;
};
