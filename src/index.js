import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const bodyParser = require('body-parser')
const {postSqlPeople, getSqlPeople} = require("./controllers/people_sql")
const {postMongoPeople, getMongoPeople }= require('./controllers/people_mongo');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/people', async (req, res) => {
  let response = await getSqlPeople()
  res.send(response)
});

app.post('/persons', async (req, res) => {
  const {people_name, email} = req.body
  let response = await postMongoPeople(people_name, email)
  res.send(response)
})

app.post('/people', async (req, res) => {
  const {people_name, email} = req.body
  let response = await postSqlPeople(people_name, email)
  res.send(response)
})

app.get('/persons', async (req, res) => {
 
  let response = await getMongoPeople()
  res.send(response)
})

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

