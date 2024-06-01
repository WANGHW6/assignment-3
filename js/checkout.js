document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('main section.checkout, main section.overlay');
  const nextButtons = document.querySelectorAll('.continue-button');
  const backButtons = document.querySelectorAll('.back-button');
  let currentSectionIndex = 0;

  // Initialize visibility
  sections.forEach((section, index) => {
      section.style.display = index === 0 ? 'flex' : 'none';
  });

  nextButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          if (currentSectionIndex < sections.length - 1) {
              sections[currentSectionIndex].style.display = 'none';
              currentSectionIndex++;
              sections[currentSectionIndex].style.display = 'flex';

              // If we are at the third section, make the fourth section visible but keep the third section visible
              if (currentSectionIndex === 3) {
                  sections[currentSectionIndex - 1].style.display = 'flex';
                  sections[currentSectionIndex].style.display = 'flex';
              }
          }
      });
  });

  backButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          if (currentSectionIndex > 0) {
              sections[currentSectionIndex].style.display = 'none';
              currentSectionIndex--;
              sections[currentSectionIndex].style.display = 'flex';
          }
      });
  });
});