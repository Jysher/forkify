import * as model from './model.ts';
import recipeView from './views/RecipeView.ts';
import resultsView from './views/ResultsView.ts';
import searchView from './views/SearchView.ts';

async function controlRecipes(): Promise<void> {
  try {
    const id: string = model.state.resultID;
    if (!id) return;

    recipeView.renderSpinner();
    await model.getRecipeAPI(id);
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError(error);
  }
}

async function controlSearchRecipes(): Promise<void> {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();
    await model.searchRecipeAPI(query);

    resultsView.render(model.state.search.results);
    resultsView.handlerAddEventHandler(model.setResultID, controlRecipes);
  } catch (error) {
    resultsView.renderError(error);
  }
}

function init() {
  recipeView.handlerRender(controlRecipes);
  searchView.handlerSearch(controlSearchRecipes);
}

init();
