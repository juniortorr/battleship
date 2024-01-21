export default (function domstuff() {
  const boardContainer = document.querySelector('.gameboard-container');
  const coordinatesInput = document.querySelector('.coordinates');
  const sendAttack = document.querySelector('.send-attack');

  const createPlayerBoard = (board) => {
    board.forEach((row) => {
      const gridRow = document.createElement('div');
      const rowIndex = board.indexOf(row);
      gridRow.classList.add('board-row');
      boardContainer.prepend(gridRow);
      for (let i = 0; i < row.length; i += 1) {
        const gridUnit = document.createElement('div');
        const spotIndex = i;
        gridUnit.classList.add('grid-unit');
        gridUnit.setAttribute('data-set', [spotIndex, rowIndex]);
        gridRow.append(gridUnit);
      }
    });
  };

  function handleSendAttack() {
    console.log('attack');
  }

  sendAttack.addEventListener('click', handleSendAttack);

  return { handleSendAttack, createPlayerBoard };
})();
