import type { ObjectId } from 'mongodb';
import type { Ingredient, Recipe } from '../types/types.mts';
import { recipeCollection, connectDB, client } from '../db/db.mts';

export async function findAllRecipes(): Promise<Recipe[] | undefined> {
  try {
    await connectDB();
    const result: unknown[] = await recipeCollection.find().toArray();
    return result as Recipe[];
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}

export async function findRecipe(id: ObjectId): Promise<Recipe | undefined> {
  try {
    await connectDB();
    const result: unknown = recipeCollection.find({ _id: id });
    return result as Recipe;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}
