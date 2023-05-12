const modificationOutput = document.getElementById('modificationOutput');

const lastModified = new Date(document.lastModified);
const currentYear = new Date().getFullYear();
const lastModifiedTime = lastModified.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

modificationOutput.innerHTML = `\u00A9 ${currentYear}  Peachtree City Chamber | Alison Mazzarella-Woelzl | WDD 230 Project | Last Modification: ${lastModified.toLocaleDateString()} ${lastModifiedTime}`;
