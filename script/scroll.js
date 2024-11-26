document.getElementById('scroll_btn').addEventListener('click', function() {
    const targetElement = document.getElementById('list'); // Zmień ID na docelowe
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  