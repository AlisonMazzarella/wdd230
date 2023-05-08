const footer = document.querySelector('footer');

const lastModified = document.lastModified;

const currentYear = new Date().getFullYear();

const dateElement = document.createElement('p');
dateElement.innerHTML = `\u00A9 ${currentYear}  Peachtree City Chamber | <b>Alison Mazzarella-Woelzl</b> | WDD 230 Project | Last Modification: ${lastModified}`;

footer.appendChild(dateElement);