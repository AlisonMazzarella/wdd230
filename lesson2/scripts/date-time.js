//footer element
const footer = document.querySelector('footer');

//get date and time web file was last modified
const lastModified = document.lastModified;

// get current year
const currentYear = new Date().getFullYear();

//create paragraph to display date and time and current year 
const dateElement = document.createElement('p');
dateElement.textContent = `${currentYear}  -  Alison Mazzarella-Woelzl  -  Austria  - Last updated: ${lastModified}`;

//add paragraph to footer
footer.appendChild(dateElement);