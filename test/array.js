function handleSearch() {
    const searchContent = ["coco"]
    let searchRecipesArray = [];
    currentlyDisplayedRecipes.forEach((recipe) => {
      if (
        recipe.name.toLowerCase().includes(
          searchContent[0].toLowerCase()
        ) || 
        recipe.ingrédients.some((ingredient) => ingredient.ingrédient.toLowerCase().includes(
          searchContent[0].toLowerCase()
        )) ||
        recipe.description.toLowerCase().includes(
          searchContent[0].toLowerCase()
        )
      ) {
        searchRecipesArray.push(recipe);
      }
    });
  }
  
  handleSearch();