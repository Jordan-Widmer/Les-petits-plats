function handleSearch() {
  const searchContent = ["coco"];
  let searchRecipesArray = [];
  for (const recipe in currentlyDisplayedRecipes) {
    for (const word in searchContent) {
      if (
        currentlyDisplayedRecipes[recipe].ingrédients.includes(
          searchContent[word]
        ) ||
        currentlyDisplayedRecipes[recipe].description.includes(
          searchContent[word]
        ) ||
        currentlyDisplayedRecipes[recipe].name.includes(searchContent[word])
      ) {
        searchRecipesArray.push(currentlyDisplayedRecipes[recipe]);
      } else {
        break;
      }
    }
  }
}

handleSearch();
