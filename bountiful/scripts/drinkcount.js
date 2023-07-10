let drinkCount = parseInt(localStorage.getItem('drinkCount')) || 0;

function updateDrinkCountDisplay() {
  document.getElementById('drink-count').textContent = drinkCount;
}

function incrementDrinkCount() {
  drinkCount++;
  localStorage.setItem('drinkCount', drinkCount);
  updateDrinkCountDisplay();
}

window.addEventListener('DOMContentLoaded', updateDrinkCountDisplay);

const freshForm = document.getElementById('specialty-drink-form');
if (freshForm) {
  freshForm.addEventListener('submit', function (event) {
    event.preventDefault();
    incrementDrinkCount();
    freshForm.reset(); 
  });
}