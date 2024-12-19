const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruit') //..because we coming out of directory

//get all fruits
router.get("/", async (req, res) => {
    try {
      const allFruit = await Fruit.find({});  //if empty it will find everything (for extra queries look at docs)
      res.json(allFruit);
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  });


module.exports = router