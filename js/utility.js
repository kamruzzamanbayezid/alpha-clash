function hideSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.add('hidden');
}

function showSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.remove('hidden');
}

function addElementClass(elementId, value) {
      const element = document.getElementById(elementId);
      element.classList.add(value);
}

function removeElementClass(elementId, value) {
      const element = document.getElementById(elementId);
      element.classList.remove(value);
}

function randomNumber() {
      return Math.floor(Math.random() * 26);
}

function getElementInnerText(elementId) {
      const element = document.getElementById(elementId);
      return element.innerText;
}

function getElementInnerTextValue(elementId) {
      const element = document.getElementById(elementId);
      return parseFloat(element.innerText);
}

function setElementInnerTextValue(elementId, value) {
      const element = document.getElementById(elementId);
      return element.innerText = value;
}