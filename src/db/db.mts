import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
import { InternalServerError } from '../lib/CustomErrors.mts';

config();

if (
  !process.env.DATABASE_LOCAL ||
  !process.env.DATABASE_LOCAL_NAME ||
  !process.env.DATABASE_LOCAL_COLL
) {
  throw new InternalServerError('Environment variables not initialized.');
}

export const client = new MongoClient(process.env.DATABASE_LOCAL);
export const recipeCollection = client
  .db(process.env.DATABASE_LOCAL_NAME)
  .collection(process.env.DATABASE_LOCAL_COLL);

export async function connectDB(): Promise<void> {
  try {
    await client.connect();
  } catch (error) {
    throw new InternalServerError(`Database connection error: ${error}`);
  }
}
