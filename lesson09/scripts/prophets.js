var url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
var prophetsData;

async function getProphetData() {
  try {
    var response = await fetch(url);
    prophetsData = await response.json();
    prophetsData.prophets.forEach(function(prophet) {
      prophet.children = prophet.numofchildren || 0;
    });
    displayProphets(prophetsData.prophets);
  } catch (error) {
    console.error("Error:", error);
  }
}

var displayProphets = function(prophets) {
  var cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  prophets.forEach(function(prophet, index) {
    var card = document.createElement("section");
    card.classList.add("card");

    var name = document.createElement("h2");
    name.innerHTML = prophet.name + " " + prophet.lastname + "<br>" + getOrderFromURL(index);
    card.appendChild(name);

    var image = document.createElement("img");
    image.src = prophet.imageurl;
    image.alt = "Portrait of " + prophet.name + " " + prophet.lastname + " - " + getOrderFromURL(index) + " Latter-day President";
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

    var children = document.createElement("p");
    children.textContent = "Children: " + (prophet.children || 0);
    card.appendChild(children);

    cardsContainer.appendChild(card);
  });
};

function getOrderFromURL(index) {
  var urlParams = new URLSearchParams(window.location.search);
  var orderParam = urlParams.getAll("order[]");
  var order = index + 1;

  if (orderParam.length > index) {
    order = parseInt(orderParam[index]);
  }

  let formatter = new Intl.PluralRules("en", { type: "ordinal" });
  let suffixes = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };

  let suffix = suffixes[formatter.select(order)];
  return order + suffix;
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
  var utahProphets = prophetsData.prophets.filter(function(prophet) {
    return prophet.birthplace.toLowerCase().includes("utah");
  });
  displayProphets(utahProphets);
}

getProphetData();