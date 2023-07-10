let drinkCount = localStorage.getItem('drinkCount') || 0;

document.getElementById('drink-count').textContent = drinkCount;

function incrementDrinkCount() {
  drinkCount++;
  localStorage.setItem('drinkCount', drinkCount);
  document.getElementById('drink-count').textContent = drinkCount;
}

const freshForm = document.getElementById('fresh-form');
if (freshForm) {
  freshForm.addEventListener('submit', function (event) {
    event.preventDefault();
    incrementDrinkCount();
  });
}