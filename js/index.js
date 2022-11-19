import * as data from "./data/recipes.js";
import * as factory from "./factory.js";

const recipes = data.recipes;
let filtersList = { ingredients: [], ustensiles: [], appareils: [] };
let mappedList = { ingredients: [], ustensiles: [], appareils: [] };
let activeFilterList = [];
let activeFilterListState = [];
let currentlyDisplayedRecipes = recipes;

const recipeSection = document.querySelector("#recipe-list");

function displayRecipes(recipeList) {
  recipeSection.replaceChildren();
  filtersList = { ingredients: [], ustensiles: [], appareils: [] };
  mappedList = { ingredients: [], ustensiles: [], appareils: [] };
  recipeList.forEach((recipe) => {
    recipeSection.appendChild(factory.generateRecipeMap(recipe));
    populateFiltersAndMap(
      recipe.ingredients,
      recipe.ustensils,
      recipe.appliance,
      recipe
    );
  });
  regenerateFilters();
}

const eventListenerList = [
  [document.querySelector(".ingredients-input"), "ingredients"],
  [document.querySelector(".appareils-input"), "appareils"],
  [document.querySelector(".ustensiles-input"), "ustensiles"],
];

eventListenerList.forEach((element) => {
  element[0].addEventListener("focus", (event) => {
    event.target.placeholder = ["Rechercher un", element[1]].join(" ");
    document.querySelector(".dropdown-" + element[1]).style.display = "flex";
    document.querySelector("#" + element[1] + "-btn").style.width = "667px";
    document.querySelector("#" + element[1] + "-btn").style.borderRadius =
      "5px 5px 0 0";
  });
  element[0].addEventListener("blur", (event) => {
    if (
      !document
        .querySelector(".dropdown-" + element[1])
        .contains(event.relatedTarget)
    ) {
      event.target.placeholder = element[1];
      document.querySelector(".dropdown-" + element[1]).style.display = "none";
      document.querySelector("#" + element[1] + "-btn").style.width = "170px";
      document.querySelector("#" + element[1] + "-btn").style.borderRadius =
        "5px 5px 5px 5px";
    }
  });
});

displayRecipes(recipes);

function handleSearch() {
  const start = performance.now();
  if (document.querySelector("#search-recipe").value.length < 3) {
    displayRecipes(recipes);
    if (activeFilterList.length != 0) {
      displayFilteredRecipes();
    }
    return;
  }
  const searchContent = document
    .querySelector("#search-recipe")
    .value.split(" ");
  let searchRecipesArray = [];
  for (const recipe in currentlyDisplayedRecipes) {
    for (const word in searchContent) {
      if (
        currentlyDisplayedRecipes[recipe].ingredients.includes(
          searchContent[word]
        ) ||
        currentlyDisplayedRecipes[recipe].description.includes(
          searchContent[word]
        ) ||
        currentlyDisplayedRecipes[recipe].name.includes(searchContent[word])
      ) {
        if (word == searchContent.length - 1) {
          searchRecipesArray.push(currentlyDisplayedRecipes[recipe]);
        }
      } else {
        break;
      }
    }
  }
  displayRecipes(searchRecipesArray);
  console.log(`Execution time: ${performance.now() - start} ms`);
}

window.handleSearch = handleSearch;

function displayActiveFilter(filterText, category) {
  const activeFilter = document.createElement("span");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-times-circle-o", "fa-2xl");
  activeFilter.textContent = filterText;
  activeFilter.appendChild(deleteIcon);

  switch (category) {
    case "ingredients":
      activeFilter.classList.add("ingredient-filter-item");
      break;
    case "ustensiles":
      activeFilter.classList.add("ustensil-filter-item");
      break;
    case "appareils":
      activeFilter.classList.add("appareil-filter-item");
      break;
  }
  activeFilter.addEventListener("click", () => {
    removeActiveFilter(
      activeFilter,
      Array.from(activeFilter.parentElement.children).indexOf(activeFilter)
    );
  });
  document.querySelector(".active-filter-list").appendChild(activeFilter);
}

function removeActiveFilter(filter, index) {
  filter.remove();
  activeFilterList.splice(index, 1);
  activeFilterListState.splice(index, 1);
  if (document.querySelector("#search-recipe").value) {
    if (activeFilterList.length == 0) {
      currentlyDisplayedRecipes = recipes;
    }
    handleSearch();
    return;
  }

  if (activeFilterList.length == 0) {
    displayRecipes(recipes);
    return;
  }
  displayFilteredRecipes();
}

function addFiltersRecipes(filterName, filterType) {
  activeFilterList.push(mappedList[filterType][filterName]);
  activeFilterListState.push([filterType, filterName]);
  displayFilteredRecipes();
}

function regenerateFilters() {
  const tempActiveFilterList = [];
  activeFilterListState.forEach((filter) => {
    tempActiveFilterList.push(mappedList[filter[0]][filter[1]]);
  });
  activeFilterList = tempActiveFilterList;
}

function handleFilterBtn(category) {
  const dropdownFilter = document.querySelector(".dropdown-" + category);
  dropdownFilter.replaceChildren();
  filtersList[category].forEach((filter, x) => {
    if (
      filter
        .toLowerCase()
        .includes(
          document.querySelector("." + category + "-input").value.toLowerCase()
        ) ||
      document.querySelector("." + category + "-input").value == ""
    ) {
      const filterItem = document.createElement("span");
      const filterText = document.createElement("p");
      filterItem.classList.add("filter-item");
      filterText.classList.add("filter-text");
      filterText.textContent = filter;
      filterItem.appendChild(filterText);
      dropdownFilter.appendChild(filterItem);
      filterText.setAttribute("tabindex", x); // so it dont focuout on click on children
      filterText.addEventListener("click", () => {
        addFiltersRecipes(filterText.textContent, category);
        displayActiveFilter(filterText.textContent, category);
        document.querySelector("." + category + "-input").focus();
      });
    }
  });
}
window.handleFilterBtn = handleFilterBtn;
