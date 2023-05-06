const footer = document.querySelector('footer');

const lastModified = document.lastModified;

const currentYear = new Date().getFullYear();

const dateElement = document.createElement('p');
dateElement.textContent = `\u00A9 ${currentYear}  Peachtree City Chamber | Alison Mazzarella-Woelzl | WDD 230 Project | Last Modification: ${lastModified}`;

footer.appendChild(dateElement);