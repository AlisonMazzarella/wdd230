const modificationOutput = document.getElementById('modificationOutput');

const lastModified = document.lastModified;
const currentYear = new Date().getFullYear();

modificationOutput.innerHTML = `\u00A9 ${currentYear}  Peachtree City Chamber | <b>Alison Mazzarella-Woelzl</b> | WDD 230 Project | Last Modification: ${lastModified}`;