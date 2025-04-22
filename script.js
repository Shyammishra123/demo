function selectCard(card) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => {
      c.classList.remove('selected');
      c.querySelector('input[type="radio"]').checked = false;
  
      const dropdown = c.querySelector('.dropdowns');
      if (dropdown) dropdown.style.display = 'none';
    });
  
    card.classList.add('selected');
    card.querySelector('input[type="radio"]').checked = true;
  
    const dropdown = card.querySelector('.dropdowns');
    if (dropdown) dropdown.style.display = 'block';
  
    const totalElement = document.querySelector('.total strong');
    const selectedPrice = card.querySelector('.price p')?.textContent;
    if (selectedPrice) {
      totalElement.textContent = selectedPrice;
    }
  }
  