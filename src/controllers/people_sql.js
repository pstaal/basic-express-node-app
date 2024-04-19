const { Client } = require('pg');
const client = new Client({
    user: 'peter',
    host: '167.71.67.149',
    database: 'people',
    password: 'test',
});


async function getSqlPeople(){
  await client.connect();

  let res = await client.query("SELECT * FROM people");

  await client.end();

  return res
}


async function postSqlPeople(name, email) {
  await client.connect();

  let res = await client.query('INSERT INTO people (people_name, email) VALUES ($1, $2)', [name, email]);

  await client.end();

  return res
}
module.exports = {getSqlPeople, postSqlPeople}

