export function generateRecipeMap(recipe) {
  const recipeMap = document.createElement("figure");
  const recipeMapImage = document.createElement("images");
  const recipeMapDetails = document.createElement("figcaption");
  const recipeTitle = document.createElement("span");
  const recipeMaking = document.createElement("span");
  const recipeName = document.createElement("h2");
  const recipeTime = document.createElement("h2");
  const recipeIngredients = document.createElement("span");
  const recipeDescription = document.createElement("span");

  recipeName.textContent = recipe.name;
  recipeTime.innerHTML = `<i class='fa fa-clock-o'></i>${[
    "",
    recipe.time,
    "min",
  ].join(" ")}`;
  generateIngredients(recipe.ingredients, recipeIngredients);
  recipeDescription.textContent = recipe.description;

  recipeMap.appendChild(recipeMapImage);
  recipeMap.appendChild(recipeMapDetails);
  recipeTitle.appendChild(recipeName);
  recipeTitle.appendChild(recipeTime);
  recipeMapDetails.appendChild(recipeTitle);
  recipeMaking.appendChild(recipeIngredients);
  recipeMaking.appendChild(recipeDescription);
  recipeMapDetails.appendChild(recipeMaking);

  recipeMap.classList.add("recipe-map");
  recipeMapImage.classList.add("recipe-map-picture");
  recipeMapDetails.classList.add("recipe-map-details");
  recipeTitle.classList.add("recipe-map-title");
  recipeName.classList.add("recipe-map-name");
  recipeMaking.classList.add("recipe-process");
  recipeIngredients.classList.add("recipe-ingredients");
  recipeDescription.classList.add("recipe-description");

  return recipeMap;
}

function generateIngredients(ingredients, ingredientsElement) {
  ingredients.forEach((ingredient) => {
    const ingredientsDetails = document.createElement("span");
    ingredientsDetails.textContent = [
      [ingredient.ingredient, ingredient.quantity].join(": "),
      ingredient.unit ? ingredient.unit : "",
    ].join("");
    ingredientsElement.appendChild(ingredientsDetails);
    ingredientsElement.appendChild(document.createElement("br"));
  });
}
