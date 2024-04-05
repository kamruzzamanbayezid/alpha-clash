function startGame() {
      // option 1
      // const homePage = document.getElementById('home-page');
      // homePage.classList.add('hidden');

      // const keyboardSection = document.getElementById('keyboard-section');
      // keyboardSection.classList.remove('hidden');

      // option 2
      hideSection('home-page');
      showSection('keyboard-section');

      const random = randomNumber();

      const alphabeticString = 'abcdefghijklmnopqrstuvwxyz';
      const alphabet_arr = alphabeticString.split('');

      const random_alphabet = alphabet_arr[random];
      const displayAlphabet = document.getElementById('display-alphabet');
      displayAlphabet.innerText = random_alphabet;

      const keyboardKey = document.getElementById(random_alphabet);
      keyboardKey.classList.add('alphabet-bg');
};
