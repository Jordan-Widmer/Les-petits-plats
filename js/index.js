import * as data from "./recipes.js";
import * as factory from "./factory.js";

const recipes = data.recipes;
let filtersList = {
  ingredients: [],
  ustensiles: [],
  appareils: [],
  generated: false,
};
let mappedList = { ingredients: [], ustensiles: [], appareils: [] };
let activeFilterList = [];

const recipeSection = document.querySelector("#recipe-list");

function displayRecipes(recipeList) {
  recipeSection.replaceChildren();
  recipeList.forEach((recipe) => {
    recipeSection.appendChild(factory.generateRecipeMap(recipe));
    if (filtersList.generated == false)
      populateFiltersAndMap(
        recipe.ingredients,
        recipe.ustensils,
        recipe.appliance,
        recipe
      );
  });
  filtersList.generated = true;
}

displayRecipes(recipes);


