const jsonUrl = "scripts/fruit.json";

async function fetchFruitData() {
  try {
    const response = await fetch(jsonUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching fruit data:", error);
    return [];
  }
}

function populateFruitOptions(fruitData) {
  const selectElements = document.querySelectorAll("select[id^='fruit']");
  selectElements.forEach((select) => {
    fruitData.forEach((fruit) => {
      const option = document.createElement("option");
      option.value = fruit.name;
      option.textContent = fruit.name;
      select.appendChild(option);
    });
  });
}

function calculateTotalNutrition(fruits, fruitData) {
  let totalCarbohydrates = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  fruits.forEach(function (fruit) {
    const selectedFruit = fruitData.find(function (item) {
      return item.name === fruit;
    });

    totalCarbohydrates += selectedFruit.nutritions.carbohydrates;
    totalProtein += selectedFruit.nutritions.protein;
    totalFat += selectedFruit.nutritions.fat;
    totalSugar += selectedFruit.nutritions.sugar;
    totalCalories += selectedFruit.nutritions.calories;
  });

  return {
    carbohydrates: totalCarbohydrates,
    protein: totalProtein,
    fat: totalFat,
    sugar: totalSugar,
    calories: totalCalories,
  };
}

function formatOrderSummary(inputs, totalNutrition) {
  const formattedOutput = `
    <h3>Order Details</h3>
    <p><strong>First Name:</strong> ${inputs.firstName}</p>
    <p><strong>Email:</strong> ${inputs.email}</p>
    <p><strong>Phone Number:</strong> ${inputs.phone}</p>
    <p><strong>Fruit Choices:</strong> ${inputs.fruitChoices.join(", ")}</p>
    <p><strong>Special Instructions:</strong> ${inputs.specialInstructions}</p>
    <h3>Total Nutritional Values</h3>
    <p><strong>Carbohydrates:</strong> ${totalNutrition.carbohydrates.toFixed(
      2
    )}g</p>
    <p><strong>Protein:</strong> ${totalNutrition.protein.toFixed(2)}g</p>
    <p><strong>Fat:</strong> ${totalNutrition.fat.toFixed(2)}g</p>
    <p><strong>Sugar:</strong> ${totalNutrition.sugar.toFixed(2)}g</p>
    <p><strong>Calories:</strong> ${totalNutrition.calories}</p>
  `;

  return formattedOutput;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("specialty-drink-form");
  const inputs = {
    firstName: form.elements["first-name"].value,
    email: form.elements["email"].value,
    phone: form.elements["phone"].value,
    fruitChoices: [
      form.elements["fruit1"].value,
      form.elements["fruit2"].value,
      form.elements["fruit3"].value,
    ],
    specialInstructions: form.elements["special-instructions"].value,
  };

  const totalNutrition = calculateTotalNutrition(
    inputs.fruitChoices,
    fruitData
  );

  const orderOutput = document.getElementById("order-output");
  orderOutput.innerHTML = formatOrderSummary(inputs, totalNutrition);
}

window.addEventListener("load", async () => {
  const fruitData = await fetchFruitData();
  populateFruitOptions(fruitData);

  const form = document.getElementById("specialty-drink-form");
  form.addEventListener("submit", handleFormSubmit);
});