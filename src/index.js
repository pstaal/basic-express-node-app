import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const getSqlPeople = require("./controllers/people_sql")

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/people', async (req, res) => {
  let response = await getSqlPeople()
  res.send(response)
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

