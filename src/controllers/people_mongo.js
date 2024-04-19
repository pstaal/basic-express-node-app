const mongoose = require('mongoose');

const URL = "mongodb://peter-staal.com:27017/people"


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 

const Person = mongoose.model("Person", {
    people_name: { type: String },
    email: { type: String },
});


async function getMongoPeople(){
    try {
        let res = await Person.find({})
        return res
    } catch(error) {
        console.log(error)
    }
}

async function postMongoPeople(name, email){
    try {
        let res = await Person.create({people_name: name, email})
        return res
    } catch(error) {
        console.log(error)
    }
}
 
module.exports = {getMongoPeople, postMongoPeople}

// const newPerson = new Person({
//     people_name: "Joppe Staal",
//     email: "joppestaal@gmail.com",
// });
 
// const setPerson = async () => {
//   try {
//     let res = await newPerson.save()
//     console.log(res)
//   } catch(error){
//     console.log(error)
//   }
// }

// setPerson();


// async function getSqlPeople(){
//   await client.connect();

//   let res = await client.query("SELECT * FROM people");

//   await client.end();

//   return res
// }

// module.exports = getSqlPeople;