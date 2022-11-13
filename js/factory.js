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
  recipeCard.appendChild(recipeMapDetails);
  recipeTitle.appendChild(recipeName);
  recipeTitle.appendChild(recipeTime);
  recipeCardDetails.appendChild(recipeTitle);
  recipeMaking.appendChild(recipeIngredients);
  recipeProcess.appendChild(recipeDescription);
  recipeCardDetails.appendChild(recipeMaking);
  return recipeMap;
}

function generateIngredients(ingredients, ingredientsElem) {
  ingredients.forEach((ingredient) => {
    const ingredientsDetails = document.createElement("span");
    ingredientsDetails.textContent = [
      [ingredient.ingredient, ingredient.quantity].join(": "),
      ingredient.unit ? ingredient.unit : "",
    ].join("");
    ingredientsElem.appendChild(ingredientsDetails);
    ingredientsElem.appendChild(document.createElement("br"));
  });
}
