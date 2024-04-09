
document.addEventListener('keyup', function (e) {

      if (e.key === 'Escape') {
            gameOver();
      }

      const displayAlphabet = getElementTextById('display-alphabet').toLowerCase();

      if (e.key === displayAlphabet) {
            continueGame();
            removeElementBackgroundById(displayAlphabet);

            const scoreCount = getElementValueById('score-count');
            const newScore = scoreCount + 1;

            updateElementValueById('score-count', newScore);
      }
      else {
            const lifeCount = getElementValueById('life-count');
            const newLife = lifeCount - 1;

            if (newLife === 0) {
                  gameOver();
            }

            updateElementValueById('life-count', newLife);

      }
})

function continueGame() {
      const randomAlphabet = getRandomAlphabet();

      // set background color to keyboard element
      addElementBackgroundById(randomAlphabet);
      updateElementValueById('display-alphabet', randomAlphabet)
}

function startGame() {
      hideSection('home-page');
      hideSection('score-section');
      showSection('keyboard-section');

      updateElementValueById('score-count', 0)
      updateElementValueById('life-count', 5)

      continueGame();
};

function gameOver() {
      hideSection('keyboard-section');
      showSection('score-section');

      removeElementBackgroundById(getElementTextById('display-alphabet'));

      updateElementValueById('final-score', getElementTextById('score-count'))
}