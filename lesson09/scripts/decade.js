var filterBtn = document.getElementById('filterBtn');

filterBtn.addEventListener('click', filterProphetsByDecade);

function filterProphetsByDecade() {
  var decadeProphets = prophets.filter(prophet => prophet.length >= 10);
  displayProphets(decadeProphets);
}