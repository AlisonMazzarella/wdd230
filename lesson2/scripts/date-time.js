//footer element
const footer = document.querySelector('footer');

//get date and time web file was last modified
const lastModified = new Date(document.lastModified);

//formate date and time as a string 
const formattedDate = lastModified.toLocaleDateString('en-US');
const formattedTime = lastModified.toLocaleTimeString('en-US');

//get current year 
const currentYear = new Date().getFullYear();

//create paragraph to display date and time and current year 
const dateElement = document.createElement('p');
dateElement.textContent = `Last updated: ${formattedDate} ${formattedTime} | &copy; ${currentYear} - Alison Mazzarella-Woelzl - Austria`;

//add paragraph to footer
footer.appendChild(dateElement);