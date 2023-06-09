var url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
var prophetsData;
var originalProphetsData;

async function getProphetData() {
  try {
    const response = await fetch(url);
    prophetsData = await response.json();
    originalProphetsData = prophetsData.prophets;
    displayProphets(prophetsData.prophets);
  } catch (error) {
    console.error("Error:", error);
  }
}

var displayProphets = function(prophets) {
  var cardsContainer = document.querySelector(".cards");
  // Clear the existing cards
  cardsContainer.innerHTML = '';

  prophets.forEach(function(prophet, index) {
    var card = document.createElement("section");
    card.classList.add("card");

    var name = document.createElement("h2");
    name.innerHTML = prophet.name + " " + prophet.lastname + "<br>" + getProphetNameWithNumber(index + 1);
    card.appendChild(name);

    var image = document.createElement("img");
    image.src = prophet.imageurl;
    image.alt = "Portrait of " + prophet.name + " " + prophet.lastname + " - " + getProphetNameWithNumber(index + 1) + " Latter-day President";
    card.appendChild(image);

    var birthDate = document.createElement("p");
    birthDate.textContent = "Birth Date: " + prophet.birthdate;
    card.appendChild(birthDate);

    var birthPlace = document.createElement("p");
    birthPlace.textContent = "Birth Place: " + prophet.birthplace;
    card.appendChild(birthPlace);

    var age = document.createElement("p");
    var ageText = prophet.death ? calculateAge(prophet.birthdate, prophet.death) : "Current Age: " + calculateCurrentAge(prophet.birthdate);
    age.textContent = ageText;
    card.appendChild(age);

    cardsContainer.appendChild(card);
  });
};

function getProphetNameWithNumber(number) {
  var suffix = getNumberSuffix(number);
  return number + suffix;
}

function getNumberSuffix(number) {
  var suffix = "th";
  var lastDigit = number % 10;
  var lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    suffix = "st";
  } else if (lastDigit === 2 && lastTwoDigits !== 12) {
    suffix = "nd";
  } else if (lastDigit === 3 && lastTwoDigits !== 13) {
    suffix = "rd";
  }

  return suffix;
}

function calculateAge(birthdate, deathdate) {
  var birthYear = new Date(birthdate).getFullYear();
  var deathYear = new Date(deathdate).getFullYear();
  var age = deathYear - birthYear;
  return "Age at Death: " + age;
}

function calculateCurrentAge(birthdate) {
  var birthYear = new Date(birthdate).getFullYear();
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  return age;
}

function filterProphetsBornInUtah() {
  var utahProphets = originalProphetsData.filter(function(prophet) {
    return prophet.birthplace.toLowerCase().includes("utah");
  });
  displayProphets(utahProphets);
}

getProphetData();
