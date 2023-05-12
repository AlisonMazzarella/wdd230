const inputElement = document.getElementById('favchap');
const buttonElement = document.querySelector('button[type="submit"]');
const listElement = document.getElementById('list');

function addChapter() {
  const chapterName = inputElement.value.trim();

  if (chapterName) {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    listItem.textContent = chapterName;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', 'Remove ' + chapterName);

    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    listElement.appendChild(listItem);

    inputElement.value = '';

    inputElement.focus();
  }
}

buttonElement.addEventListener('click', function(event) {
  event.preventDefault();
  addChapter();
});

inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    addChapter();
  }
});

