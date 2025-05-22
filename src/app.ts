import express from 'express';
const app = express();

app.use(express.json());
app.use('/', express.static('./src/public'));

export default app;
