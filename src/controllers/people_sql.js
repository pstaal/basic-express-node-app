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

module.exports = getSqlPeople;

