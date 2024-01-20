export default function changeTurn(player) {
  if (player.isTurn === false) {
    player.isTurn = true;
  } else {
    player.isTurn = false;
  }
  return player.isTurn;
}
