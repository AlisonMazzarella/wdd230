async function fetchData() {
  try {
    const response = await fetch('scripts/data.json');
    const data = await response.json();
    return data.businesses;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

function generateBusinessCards(businesses) {
  return businesses.map((business) => `
    <div class="card">
      <img src="${business.imageurl}" alt="${business.name}" class="card-image">
      <div class="card-content">
        <h2>${business.name}</h2>
        <p>${business.street}, ${business.city}</p>
        <p>${business.services}</p>
        <p>Membership: ${business.membership}</p>
        <p>Contact: ${business.number}</p>
      </div>
    </div>
  `).join('');
}

function generateBusinessList(businesses) {
  return `
    <ul>
      ${businesses.map((business) => `
        <li>
          <h2>${business.name}</h2>
          <p>${business.street}, ${business.city}</p>
          <p>${business.services}</p>
          <p>Membership: ${business.membership}</p>
          <p>Contact: ${business.number}</p>
        </li>
      `).join('')}
    </ul>
  `;
}

function toggleView() {
  const cardsContainer = document.getElementById('cards-container');
  const listContainer = document.getElementById('list-container');
  const toggleButton = document.getElementById('toggle-button');

  if (cardsContainer.style.display === 'none') {
    cardsContainer.style.display = 'block';
    listContainer.style.display = 'none';
    toggleButton.textContent = 'View as List';
  } else {
    cardsContainer.style.display = 'none';
    listContainer.style.display = 'block';
    toggleButton.textContent = 'View as Cards';
  }
}

(async () => {
  const businesses = await fetchData();
  const cardsContainer = document.getElementById('cards-container');
  const listContainer = document.getElementById('list-container');
  const toggleButton = document.getElementById('toggle-button');

  cardsContainer.innerHTML = generateBusinessCards(businesses);
  listContainer.innerHTML = generateBusinessList(businesses);

  listContainer.style.display = 'none';

  toggleButton.addEventListener('click', toggleView);
})();
