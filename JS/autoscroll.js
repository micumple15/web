// app.js

document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('scrollButton');
    var sections = document.querySelectorAll('section');
    var currentIndex = 0;
  
    scrollButton.addEventListener('click', function () {
      scrollToNextSection();
    });
  
    function scrollToNextSection() {
      currentIndex = (currentIndex + 1) % sections.length;
      sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
  });
  