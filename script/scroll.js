document.getElementById('scroll_btn').addEventListener('click', function() {
    const targetElement = document.getElementById('list');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  