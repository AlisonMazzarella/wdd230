async function fetchDirectoryData() {
  try {
    const response = await fetch('scripts/data.json');
    if (response.ok) {
      const data = await response.json();
      displaySpotlightMembers(data.businesses);
    } else {
      throw new Error('Error fetching directory data:', response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displaySpotlightMembers(members) {
  const shuffledMembers = shuffleArray(members);

  const spotlight1 = shuffledMembers.find(member => member.membership === "Silver" || member.membership === "Gold");
  document.getElementById("spotlight1Name").textContent = spotlight1.name;
  document.getElementById("spotlight1Icon").src = spotlight1.imageurl;
  document.getElementById("spotlight1Description").textContent = spotlight1.services;
  document.getElementById("spotlight1Number").textContent = spotlight1.number;

  const remainingMembers = shuffledMembers.filter(member => member !== spotlight1);

  const spotlight2 = remainingMembers.find(member => member.membership === "Silver" || member.membership === "Gold");
  document.getElementById("spotlight2Name").textContent = spotlight2.name;
  document.getElementById("spotlight2Icon").src = spotlight2.imageurl;
  document.getElementById("spotlight2Description").textContent = spotlight2.services;
  document.getElementById("spotlight2Number").textContent = spotlight2.number;

  const remainingMembers2 = remainingMembers.filter(member => member !== spotlight2);

  const spotlight3 = remainingMembers2.find(member => member.membership === "Silver" || member.membership === "Gold");
  document.getElementById("spotlight3Name").textContent = spotlight3.name;
  document.getElementById("spotlight3Icon").src = spotlight3.imageurl;
  document.getElementById("spotlight3Description").textContent = spotlight3.services;
  document.getElementById("spotlight3Number").textContent = spotlight3.number;
}

fetchDirectoryData();