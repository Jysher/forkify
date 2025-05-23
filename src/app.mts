import express, { type Request, type Response } from 'express';
import { config } from 'dotenv';

config();
const app = express();

app.use(express.json());
app.use('/', express.static('dist/public'));

export default app;
