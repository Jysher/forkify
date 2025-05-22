import app from './app.ts';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
