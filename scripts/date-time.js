//footer element
const footer = document.querySelector('footer');

//get date and time web file was last modified
const lastModified = document.lastModified;

//create paragraph to display date and time and current year 
const dateElement = document.createElement('p');
dateElement.textContent = document.lastModified;

//add paragraph to footer
footer.appendChild(dateElement);