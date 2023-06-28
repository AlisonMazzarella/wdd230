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
  
function getRandomSpotlightMember(members) {
    const silverGoldMembers = members.filter(member => member.membership === "Silver" || member.membership === "Gold");
    const randomIndex = Math.floor(Math.random() * silverGoldMembers.length);
    return silverGoldMembers[randomIndex];
}
  
function displaySpotlightMembers(members) {
    const spotlight1 = getRandomSpotlightMember(members);
    document.getElementById("spotlight1Name").textContent = spotlight1.name;
    document.getElementById("spotlight1Icon").src = spotlight1.imageurl;
    document.getElementById("spotlight1Description").textContent = spotlight1.services;
    document.getElementById("spotlight1Number").textContent = spotlight1.number;
  
    const spotlight2 = getRandomSpotlightMember(members);
    document.getElementById("spotlight2Name").textContent = spotlight2.name;
    document.getElementById("spotlight2Icon").src = spotlight2.imageurl;
    document.getElementById("spotlight2Description").textContent = spotlight2.services;
    document.getElementById("spotlight2Number").textContent = spotlight2.number;
  
    const spotlight3 = getRandomSpotlightMember(members);
    document.getElementById("spotlight3Name").textContent = spotlight3.name;
    document.getElementById("spotlight3Icon").src = spotlight3.imageurl;
    document.getElementById("spotlight3Description").textContent = spotlight3.services;
    document.getElementById("spotlight3Number").textContent = spotlight3.number;
}
  
fetchDirectoryData();
  