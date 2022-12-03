const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const newIngridients = ingredients.map((ingredient) => {
  const newIngridient = document.createElement("li");
  newIngridient.textContent = ingredient;
  newIngridient.classList.add("item");

  return newIngridient;
});

ingredientsRef.append(...newIngridients);
