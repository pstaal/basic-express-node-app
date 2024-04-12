const { Client } = require('pg');
const client = new Client({
    database: 'people'
});


async function getSqlPeople(){
  await client.connect();

  let res = await client.query("SELECT * FROM people");

  await client.end();

  return res
}

module.exports = getSqlPeople;

