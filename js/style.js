

document.addEventListener('keyup', function (e) {


      if (getElementInnerText('display-alphabet') === e.key) {

            let score = getElementInnerTextValue('score-count');
            score = score + 1;

            setElementInnerTextValue('score-count', score)

            handleRandomNumber();
            removeElementClass(e.key, 'alphabet-bg');
      }
      else {
            let life = getElementInnerTextValue('life-count');
            life = life - 1;

            if (life === 0) {
                  hideSection('keyboard-section');
                  showSection('score-section');
                  finalScore();
            }

            setElementInnerTextValue('life-count', life);
      }
})

function finalScore() {
      setElementInnerTextValue('final-score', getElementInnerText('score-count'));
}

function restartGame() {
      hideSection('score-section');
      showSection('keyboard-section');

      setElementInnerTextValue('score-count', 0)
      setElementInnerTextValue('life-count', 5)
      // handleRandomNumber();
}

function handleRandomNumber() {
      const random = randomNumber();

      const alphabeticString = 'abcdefghijklmnopqrstuvwxyz';
      const alphabet_arr = alphabeticString.split('');

      const random_alphabet = alphabet_arr[random];
      const displayAlphabet = document.getElementById('display-alphabet');
      displayAlphabet.innerText = random_alphabet;

      const keyboardKey = document.getElementById(random_alphabet);
      keyboardKey.classList.add('alphabet-bg');
}

function startGame() {
      // option 1
      // const homePage = document.getElementById('home-page');
      // homePage.classList.add('hidden');

      // const keyboardSection = document.getElementById('keyboard-section');
      // keyboardSection.classList.remove('hidden');

      // option 2
      hideSection('home-page');
      showSection('keyboard-section');

      handleRandomNumber();
};

