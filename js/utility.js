function hideSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.add('hidden');
}

function showSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.classList.remove('hidden');
}

