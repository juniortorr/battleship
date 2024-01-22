const computerChoice = () => {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  return [x, y];
};

export default function handleComputerAttack(player) {
  const choice = computerChoice();
  console.log('player receiving attack:', player.receiveAttack(choice[0], choice[1]));
  console.log('player checking fleet:', player.checkShipsAlive());
  return player.checkShipsAlive();
}
