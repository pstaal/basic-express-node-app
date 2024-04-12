const { Client } = require('pg');
const client = new Client({
    user: 'peter',
    host: 'peter-staal.com',
    database: 'people',
    password: "Joppe17052013!",
    port: 5432,
});


async function getSqlPeople(){
  await client.connect();

  let res = await client.query("SELECT * FROM people");

  await client.end();

  return res
}

module.exports = getSqlPeople;

