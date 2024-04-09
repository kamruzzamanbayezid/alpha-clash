function hideSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.add('hidden');
};

function showSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.remove('hidden');
};

function addElementBackgroundById(elementId) {
      const element = document.getElementById(elementId);
      element.classList.add('alphabet-bg');
};

function removeElementBackgroundById(elementId) {
      const element = document.getElementById(elementId);
      element.classList.remove('alphabet-bg');
};

function getElementValueById(elementId) {
      const element = document.getElementById(elementId);
      return parseInt(element.innerText);
};

function getElementTextById(elementId) {
      const element = document.getElementById(elementId);
      return element.innerText;
}

function updateElementValueById(elementId, value) {
      const element = document.getElementById(elementId);
      element.innerText = value;
}

function getRandomAlphabet() {
      const alphabeticString = 'abcdefghijklmnopqrstuvwxyz';
      const alphabeticArray = alphabeticString.split('');

      const randomNumber = Math.floor(Math.random() * 27);
      return alphabeticArray[randomNumber];
}
