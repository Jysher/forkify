import { API_URL } from './config.ts';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: 10,
  },
  bookmarks: [],
  resultID: '5ed6604591c37cdc054bc886',
};

export function setResultID(id: string | undefined): void {
  if (!id) return;
  state.resultID = id;
}

export async function getRecipeAPI(id: string): Promise<void> {
  try {
    const result = await fetch(`${API_URL}/${id}`);
    const data = await result.json();
    if (!result.ok) {
      throw new Error(`${data.message}`);
    }
    state.recipe = data.data.recipe;
  } catch (error) {
    throw error;
  }
}

export async function searchRecipeAPI(query: string): Promise<void> {
  try {
    state.search.query = query;
    const result = await fetch(`${API_URL}/?search=${query}`);
    const data = await result.json();
    if (!result.ok) {
      throw new Error(`${data.message}`);
    }
    state.search.results = data.data.recipes;
  } catch (error) {
    throw error;
  }
}
