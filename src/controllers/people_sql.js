const { Client } = require('pg');
const client = new Client({
    user: 'peterstaal',
    host: '127.0.0.1',
    database: 'people',
});


async function getSqlPeople(){
  await client.connect();

  let res = await client.query("SELECT * FROM people");

  await client.end();

  return res
}

module.exports = getSqlPeople;

