const express = require("express");
const router = express.Router();

const {
     getPlanets,
     getRandomPlanet,
     searchPlanet,
  } = require("../models/planetMods");

router.get("/", async function (req, res) {
    console.log ("got to router!")
    const result = await getPlanets ()
    res.json({ success: true, payload: result})
   })

   router.get("/random", async function (req, res) {
    console.log ("got to random!") 
    const result = await getRandomPlanet ()
    res.json({ success: true, payload: result})
   })

   router.get("/search", async function (req, res) {
    console.log ("Searching") 
    console.log (req.query.planet)
    const result = await searchPlanet (req.query.planet)
    res.json({ success: true, payload: result})
   })


   module.exports = router;