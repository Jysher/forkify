export type Ingredient = {
  quantity: number | null;
  unit: string | null;
  description: string;
};
export type Recipe = {
  id: string;
  title: string;
  publisher: string;
  source_url: string;
  image_url: string;
  servings: number;
  cooking_time: number;
  ingredients: Ingredient[];
};

export type RecipeSummary = Pick<
  Recipe,
  'id' | 'title' | 'publisher' | 'image_url'
>;
