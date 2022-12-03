// importe le fichier recipes.js
import * as data from "./data/recipes.js";
// importe le fichier factory.js
import * as factory from "./factory.js";
const recipes = data.recipes;
// cet objet contiendra les données des filtres
let filtersList = {
  ingrédients: [],
  ustensiles: [],
  appareils: [],
};
let mappedList = {
  ingrédients: [],
  ustensiles: [],
  appareils: [],
};
let activeFilterList = [];
let activeFilterListState = [];
let currentlyDisplayedRecipes = recipes;
// getting recipeSection from the DOM
const recipeSection = document.querySelector("#recipe-list");
// cette fonction affichera les recettes
function displayRecipes(recipeList) {
  recipeSection.replaceChildren();
  filtersList = {
    ingrédients: [],
    ustensiles: [],
    appareils: [],
  };
  mappedList = {
    ingrédients: [],
    ustensiles: [],
    appareils: [],
  };
  // répétition sur le tableau de recettes et appel generateRecipeMap
  recipeList.forEach((recipe) => {
    recipeSection.appendChild(factory.generateRecipeMap(recipe));
    populateFiltersAndMap(
      recipe.ingrédients,
      recipe.ustensils,
      recipe.appliance,
      recipe
    );
  });
  regenerateFilters();
}
// obtention le champ d'entrée du DOM et attachement du listener
const eventListenerList = [
  [document.querySelector(".ingrédients-input"), "ingrédients"],
  [document.querySelector(".appareils-input"), "appareils"],
  [document.querySelector(".ustensiles-input"), "ustensiles"],
];
// attachement du listener
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
// handle search function est appelé lorsque nous utiliserons le filtre dans l'application
function handleSearch() {
  // cette fonction calculera l'heure de début de l'algorithme
  const start = performance.now();
  // si la valeur du champ de recherche est inférieure à 3 caractères, il affichera toutes les recettes
  if (document.querySelector("#search-recipe").value.length < 3) {
    displayRecipes(recipes);
    if (activeFilterList.length != 0) {
      displayFilteredRecipes();
    }
    return;
  }
  // nous obtenons des valeurs pour la valeur de recherche
  const searchContent = document
    .querySelector("#search-recipe")
    .value.split(" ");
  // searchRecipesArray contiendra les recettes filtrées
  let searchRecipesArray = [];
  // répétition sur currentDisplayedRecipes
  currentlyDisplayedRecipes.forEach((recipe) => {
    // vérifie si recipe.name inclut la chaîne de recherche puis renvoie la recette
    if (recipe.name.toLowerCase().includes(searchContent[0].toLowerCase())) {
      searchRecipesArray.push(recipe);
    }
    // vérifie si recette.ingrédient inclut la chaîne de recherche puis renvoie la recette
    else if (
      recipe.ingrédients.some((ingredient) =>
        ingredient.ingrédient
          .toLowerCase()
          .includes(searchContent[0].toLowerCase())
      )
    ) {
      searchRecipesArray.push(recipe);
    }
  });
  // nous affichons le searchRecipesArray dans le DOM
  displayRecipes(searchRecipesArray);
  console.log(`Execution time: ${performance.now() - start} ms`);
}
window.handleSearch = handleSearch;
// cette fonction affichera les filtres actifs sur le DOM
function displayActiveFilter(filterText, category) {
  const activeFilter = document.createElement("span");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-regular", "fa-circle-xmark");
  activeFilter.textContent = filterText;
  // ajout de la nouvelle balise I créée dans le dom
  activeFilter.appendChild(deleteIcon);
  // ajout de classes dynamiques basées sur la catégorie de filtre
  switch (category) {
    case "ingrédients":
      activeFilter.classList.add("ingrédient-filter");
      break;
    case "ustensiles":
      activeFilter.classList.add("ustensil-filter");
      break;
    case "appareils":
      activeFilter.classList.add("appareil-filter");
      break;
  }
  // attache l'événement click au filtre actif.
  activeFilter.addEventListener("click", () => {
    removeActiveFilter(
      activeFilter,
      Array.from(activeFilter.parentElement.children).indexOf(activeFilter)
    );
  });
  document.querySelector(".active-filter").appendChild(activeFilter);
}
// suppression du filtre actif..
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
// cette fonction ajoutera un filtre dans le tableau des filtres
function addFiltersRecipes(filterName, filterType) {
  activeFilterList.push(mappedList[filterType][filterName]);
  activeFilterListState.push([filterType, filterName]);
  displayFilteredRecipes();
}
// régénère les filtres à partir de la liste
function regenerateFilters() {
  const tempActiveFilterList = [];
  activeFilterListState.forEach((filter) => {
    tempActiveFilterList.push(mappedList[filter[0]][filter[1]]);
  });
  activeFilterList = tempActiveFilterList;
}
// cette fonction affichera les recettes filtrées sur le dom.
function displayFilteredRecipes() {
  const flattedList = activeFilterList.flat(1);
  const filteredData = flattedList.filter(
    (a, index) =>
      flattedList.indexOf(a) === index &&
      flattedList.reduce((acc, b) => +(a === b) + acc, 0) ===
        activeFilterList.length
  );
  currentlyDisplayedRecipes = filteredData;
  displayRecipes(filteredData);
}
// cette fonction remplira les filtres du tableau
function populateFiltersAndMap(ingrédients, ustensiles, appareils, recipe) {
  if (Array.isArray(ingrédients)) {
    ingrédients.forEach((ingrédient) => {
      ingrédient.ingrédient = normalizeFilter(ingrédient.ingrédient);
      filtersList.ingrédients.includes(ingrédient.ingrédient)
        ? null
        : filtersList.ingrédients.push(ingrédient.ingrédient);
      mappedList.ingrédients[ingrédient.ingrédient]
        ? mappedList.ingrédients[ingrédient.ingrédient].push(recipe)
        : (mappedList.ingrédients[ingrédient.ingrédient] = [recipe]);
    });
  } else {
    filtersList.ingrédients.includes(ingrédients)
      ? null
      : filtersList.ingrédients.push(ingrédients);
    mappedList.ingrédients[ingrédient.ingrédient]
      ? mappedList.ingrédients[ingrédient.ingrédient].push(recipe)
      : (mappedList.ingrédients[ingrédient.ingrédient] = [recipe]);
  }
  if (Array.isArray(ustensiles)) {
    ustensiles.forEach((ustensile) => {
      ustensile = normalizeFilter(ustensile);
      filtersList.ustensiles.includes(ustensile)
        ? null
        : filtersList.ustensiles.push(ustensile);
      mappedList.ustensiles[ustensile]
        ? mappedList.ustensiles[ustensile].push(recipe)
        : (mappedList.ustensiles[ustensile] = [recipe]);
    });
  } else {
    filtersList.ustensiles.includes(ustensiles)
      ? null
      : filtersList.ustensiles.push(ustensiles);
    mappedList.ustensiles[ustensile]
      ? mappedList.ustensiles[ustensile].push(recipe)
      : (mappedList.ustensiles[ustensile] = [recipe]);
  }
  if (Array.isArray(appareils)) {
    appareils.forEach((appareil) => {
      appareil = normalizeFilter(appareil);
      filtersList.appareils.includes(appareil)
        ? null
        : filtersList.appareils.push(appareil);
      mappedList.appareils[appareils]
        ? mappedList.appareils[appareils].push(recipe)
        : (mappedList.appareils[appareils] = [recipe]);
    });
  } else {
    filtersList.appareils.includes(appareils)
      ? null
      : filtersList.appareils.push(appareils);
    mappedList.appareils[appareils]
      ? mappedList.appareils[appareils].push(recipe)
      : (mappedList.appareils[appareils] = [recipe]);
  }
}
// cette fonction créera un filtre et l'ajoutera au DOM et attachera un événement au clic.
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
      filterText.setAttribute("tabindex", x);
      filterText.addEventListener("click", () => {
        addFiltersRecipes(filterText.textContent, category);
        displayActiveFilter(filterText.textContent, category);
        document.querySelector("." + category + "-input").focus();
      });
    }
  });
}
window.handleFilterBtn = handleFilterBtn;

function normalizeFilter(string) {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}
