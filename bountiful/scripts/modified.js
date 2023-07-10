const footerContent = document.getElementById('footer-content');

const lastModified = new Date(document.lastModified);
const currentYear = new Date().getFullYear();
const lastModifiedTime = lastModified.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

footerContent.innerHTML = `\u00A9 ${currentYear} Bountiful Foods | Alison Mazzarella-Woelzl | All rights reserved. | Last Modification: ${lastModified.toLocaleDateString()} ${lastModifiedTime}`;