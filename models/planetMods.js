import { query } from "../db/index.js";

async function getPlanets(question) {


  const planetsArray  = await query(
    `SELECT * FROM planets;`)

  console.log ("got to getPlanets!")
  console.log (question)
  return planetsArray.rows;
}

async function getRandomPlanet (){
  console.log ("Got to random planet function")
  let randNum = Math.floor((Math.random() * 8) +1 );
  console.log (randNum)
     const randomPlanet = await query(
        `SELECT * FROM planets WHERE planet_id = ${randNum}`
    )
    return randomPlanet.rows
}


async function searchPlanet(searchTerm) {

  try {
    const result = await query(
      `SELECT * FROM planets WHERE planet_name ILIKE '%' || $1 || '%'`,
      [searchTerm]
    );
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export {
    getPlanets,
    getRandomPlanet,
    searchPlanet
  };