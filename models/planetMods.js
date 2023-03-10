const { query } = require("../db/index.js");

async function getPlanets(question) {


  const planetsArray  = await query(
    `SELECT * FROM planets;`)

  console.log ("got to getPlanets!")
  console.log (question)
  return planetsArray.rows;
}

async function getRandomPlanet (){
  randNum = Math.floor((Math.random() * 8) +1 );
  console.log (randNum)
     const randomPlanet = await query(
        `SELECT * FROM planets WHERE id = ${randNum}`
    )
    return randomPlanet.rows
}

async function searchPlanet(searchTerm){
    console.log ("got to function")
    const result = await query( 
        `SELECT * FROM planets 
        WHERE planet = $1`, [searchTerm])
     return  result.rows;
      
}

module.exports = {
    getPlanets,
    getRandomPlanet,
    searchPlanet,

  };